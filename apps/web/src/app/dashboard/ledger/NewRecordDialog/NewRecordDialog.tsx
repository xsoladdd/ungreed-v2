import Select from "@/components/ui/Select";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  useGenerateLedgerMutation,
  useGetLedgerLazyQuery,
} from "@/graphql/client.generated";
import { cutoff_options, months_options, year_options } from "@/lib/var";
import { useZustand } from "@/store";
import { useFormik } from "formik";
import { useState } from "react";
import { useLedgerContext } from "../Context/useLedgerContext";
import FormControl from "./FormControl";
import { getCurrentCutoff, getCurrentMonthNumber } from "./helper";
import { useRouter } from "next/navigation";
import { getMonthNumber } from "@/lib/getMonth";
import { CaretLeftIcon, CaretRightIcon } from "@radix-ui/react-icons";

const NewRecordDialog: React.FC = () => {
  const { addRecordDialogStatus, toggleAddRecordDialog } = useLedgerContext();
  const { user } = useZustand();
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [generateLedgerMutation] = useGenerateLedgerMutation({
    notifyOnNetworkStatusChange: true,
  });

  const [getLedger] = useGetLedgerLazyQuery({ fetchPolicy: "network-only" });

  const formik = useFormik({
    initialValues: {
      month: getCurrentMonthNumber().toString(),
      year: new Date().getFullYear().toString(),
      cutoff: getCurrentCutoff(),
    },
    onSubmit: async (values) => {
      setLoading(true);
      const monthInNumber = getMonthNumber(values.month);
      if (monthInNumber === "Invalid month") {
        return;
      }
      const year = parseInt(values.year);
      const x = await getLedger({
        variables: {
          cutoff: values.cutoff,
          user_id: user.id,
          month: parseInt(monthInNumber),
          year,
        },
      });
      if (x.data?.ledger.length !== 0) {
        setError("Ledger already exist, click here to view");
        setLoading(false);
      } else {
        generateLedgerMutation({
          variables: {
            input: {
              user_id: user.id,
              month: parseInt(monthInNumber),
              year,
              cutoff: values.cutoff,
            },
          },
          refetchQueries: ["getLedgerList"],
          onCompleted: (data) => {
            if (data.insert_ledger_one?.id) {
              setLoading(false);
              toggleAddRecordDialog(false);
              return;
            }
            setError("Something went wrong");
          },
        });
      }
    },
  });

  const handlePrevious = () => {
    setError("");
    if (formik.values.cutoff === "2nd") {
      return formik.setFieldValue("cutoff", "1st");
    } else {
      const selectedMonthNumber = getMonthNumber(formik.values.month);
      if (selectedMonthNumber === "Invalid month") {
        return;
      }
      const previousMonth = months_options.find(({ value }) => {
        if (selectedMonthNumber === "1") {
          const previousYear = (parseInt(formik.values.year) - 1).toString();
          formik.setFieldValue("year", previousYear);
          return value === "12";
        }
        return value === (parseInt(selectedMonthNumber) - 1).toString();
      });
      formik.setFieldValue("month", previousMonth?.value);
      formik.setFieldValue("cutoff", "2nd");
      return;
    }
  };

  const handleNext = () => {
    setError("");
    if (formik.values.cutoff === "1st") {
      return formik.setFieldValue("cutoff", "2nd");
    } else {
      const selectedMonthNumber = getMonthNumber(formik.values.month);
      if (selectedMonthNumber === "Invalid month") {
        return;
      }
      const nextMonth = months_options.find(({ value }) => {
        if (selectedMonthNumber === "12") {
          const nextYear = (parseInt(formik.values.year) + 1).toString();
          formik.setFieldValue("year", nextYear);
          return value === "1";
        }
        return value === (parseInt(selectedMonthNumber) + 1).toString();
      });
      formik.setFieldValue("month", nextMonth?.value);
      formik.setFieldValue("cutoff", "1st");
      return;
    }
  };
  return (
    <Dialog
      open={addRecordDialogStatus}
      modal={true}
      onOpenChange={(x) => {
        formik.resetForm();
        setError("");
        setLoading(false);
        toggleAddRecordDialog(x);
      }}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New record</DialogTitle>
          <DialogDescription>
            Generate new record by filling up the following fields.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={formik.handleSubmit}>
          <div className="grid gap-2 py-4">
            <FormControl label="Cutoff">
              <Select
                options={cutoff_options}
                className="col-span-3"
                value={formik.values.cutoff}
                onValueChange={(v) => {
                  setError("");
                  formik.setFieldValue("cutoff", v);
                }}
              />
            </FormControl>
            <FormControl label="Month">
              <Select
                options={months_options}
                className="col-span-3"
                value={formik.values.month}
                onValueChange={(v) => {
                  setError("");
                  formik.setFieldValue("month", v);
                }}
              />
            </FormControl>
            <FormControl label="Year">
              <Select
                options={year_options}
                className="col-span-3"
                value={formik.values.year}
                onValueChange={(v) => {
                  setError("");
                  formik.setFieldValue("year", v);
                }}
              />
            </FormControl>
            {/* <FormControl label="Record"></FormControl> */}
          </div>
          <div className="flex justify-between">
            <div className="">
              {error && (
                <>
                  {error.includes("already exist") ? (
                    <Button
                      className="text-sm h-4 p-0 text-red-400"
                      variant="link"
                      onClick={() => {
                        const objParams = {
                          year: parseInt(formik.values.year),
                          month: getMonthNumber(formik.values.month),
                          cutoff: formik.values.cutoff,
                        };
                        push(
                          `/dashboard/ledger/view?year=${objParams.year}&month=${objParams.month}&cutoff=${objParams.cutoff}`
                        );
                      }}
                    >
                      {error}
                    </Button>
                  ) : (
                    <small className="text-sm font-medium leading-none text-red-400">
                      {error}{" "}
                    </small>
                  )}
                </>
              )}
            </div>
            <div className="flex justify-between w-full">
              <div className="flex gap-4">
                <Button
                  type="button"
                  className="h-8"
                  variant={"outline"}
                  onClick={handlePrevious}
                  disabled={loading}
                  size="icon"
                >
                  <CaretLeftIcon className=" h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  className="h-8"
                  variant={"outline"}
                  onClick={handleNext}
                  disabled={loading}
                  size="icon"
                >
                  <CaretRightIcon className=" h-4 w-4" />
                </Button>
              </div>
              <Button type="submit" className="h-8" disabled={loading}>
                Generate
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default NewRecordDialog;
