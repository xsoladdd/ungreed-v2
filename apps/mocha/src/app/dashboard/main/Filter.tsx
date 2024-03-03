"use client";
import InputWrapper from "@/components/ui/InputWrapper";
import Select from "@/components/ui/Select";
import { Button } from "@/components/ui/button";
import { useGetLedgerLazyQuery } from "@/graphql/client.generated";
import { useZustand } from "@/store";
import {
  filterSchema,
  getCurrentCutoff,
  getCurrentMonthNumber,
  months_options,
  year_options,
} from "./helper";
import { useSearchParams } from "next/navigation";
import { cutoffType } from "@/store/slices/filterSlice";
import { useFormik } from "formik";
import { Suspense } from "react";
import { useToast } from "@/components/ui/use-toast";

const Filter: React.FC = () => {
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const {
    ledger: {
      resetSelectedLedger,
      setSelectedLedger,
      setLedgerStatus,
      ledgerFetchStatus,
    },
    filter: { setFilterData },
    user: { email },
  } = useZustand();
  const formik = useFormik({
    initialValues: {
      month: searchParams.get("month") ?? getCurrentMonthNumber().toString(),
      year: searchParams.get("year") ?? "2024",
      cutoff: searchParams.get("cutoff") ?? getCurrentCutoff(),
    },
    validationSchema: filterSchema,
    onSubmit: (value) => {
      setLedgerStatus("loading");
      const { cutoff, month, year } = value;
      setFilterData({
        cutoff: cutoff as cutoffType,
        month: parseInt(month),
        year: parseInt(year),
      });
      getLedger({
        variables: {
          cutoff,
          month: parseInt(month),
          year: parseInt(year),
          email,
        },
        ssr: true,
        onCompleted: (x) => {
          if (x.ledger.length === 0) {
            return resetSelectedLedger();
          }
          if (x.ledger[0]) {
            return setSelectedLedger(x.ledger[0]);
          } else {
            toast({
              title: "Something went wrong",
              description: `No ledger found in db`,
              variant: "destructive",
            });
            console.error("something went wrong with the useLedger");
          }
        },
        onError: (err) => {
          toast({
            title: "Something went wrong",
            description: `something went wrong with the useLedger `,
            variant: "destructive",
          });
          console.error("error", err);
        },
      });
    },
  });

  const [getLedger, { loading: ledgerLoading }] = useGetLedgerLazyQuery({
    fetchPolicy: "network-only",
  });

  const loading = ledgerLoading || ledgerFetchStatus === "loading";

  return (
    <>
      <Suspense>
        <form
          className="flex  w-full flex-col gap-3"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex gap-2 w-full lg:flex-col lg:space-x-0 lg:space-y">
            <h3 className="text-md font-medium hidden md:block">
              Select Ledger
            </h3>
            <InputWrapper className="md:max-w-[250px]">
              <Select
                options={months_options}
                onValueChange={(e) => formik.setFieldValue("month", e)}
                value={formik.values.month}
              />
            </InputWrapper>
            <InputWrapper className="md:max-w-[250px]">
              <Select
                options={year_options}
                onValueChange={(e) => formik.setFieldValue("year", e)}
                value={formik.values.year}
              />
            </InputWrapper>
            <InputWrapper className="md:max-w-[250px]">
              <Select
                options={[
                  { text: "First", value: "1st" },
                  { text: "Second", value: "2nd" },
                ]}
                onValueChange={(e) => formik.setFieldValue("cutoff", e)}
                value={formik.values.cutoff}
              />
            </InputWrapper>
          </div>
          <div className="">
            <span className="text-xs text-red-500">
              {formik.errors.cutoff ??
                formik.errors.month ??
                formik.errors.year}
            </span>
            <Button
              size="sm"
              variant="default"
              className="w-full md:max-w-[250px] h-8 "
              type="submit"
              disabled={loading}
            >
              {loading ? "Loading" : "Select Ledger"}
            </Button>
          </div>
        </form>
      </Suspense>
    </>
  );
};
export default Filter;
