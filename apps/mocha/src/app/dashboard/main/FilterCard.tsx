"use client";
import Card from "@/components/ui/Card";
import React, { useState } from "react";
import {
  getCurrentCutoff,
  getCurrentMonthNumber,
  months_options,
  year_options,
} from "./helper";
import { Button } from "@/components/ui/button";
import InputWrapper from "@/components/ui/InputWrapper";
import { useGetLedgerLazyQuery } from "@/graphql/client.generated";
import { useZustand } from "@/store";
import Select from "@/components/ui/Select";

const FilterCard: React.FC = () => {
  const {
    resetSelectedLedger,
    setSelectedLedger,
    setLedgerStatus,
    setFilterData,
    ledgerFetchStatus,
  } = useZustand();
  const [month, setMonth] = useState(getCurrentMonthNumber().toString());
  const [year, setYear] = useState("2024");
  const [cutoff, setCutoff] = useState(getCurrentCutoff());

  const email = useZustand((state) => state.user.email);

  const [getLedger, { loading: ledgerLoading }] = useGetLedgerLazyQuery({
    fetchPolicy: "network-only",
  });
  // console.log(setLedgerStatus, setSelectedRecord);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setLedgerStatus("loading");
    e.preventDefault();
    setFilterData({
      cutoff: cutoff,
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
          console.error("something went wrong with the useLedger");
        }
      },
      onError: (err) => console.log("error", err),
    });
  };

  const loading = ledgerLoading || ledgerFetchStatus === "loading";
  return (
    <Card
      title="Filter Money Sheet"
      sub="Select filter to display data"
      className="w-full lg:w-9/12"
    >
      {/* {JSON.stringify(data)} */}
      <form className="flex gap-4 flex-col sm:flex-row" onSubmit={handleSubmit}>
        <InputWrapper className="md: max-w-[250px]">
          <Select
            options={months_options}
            onValueChange={(e) => setMonth(e)}
            value={month}
          />
        </InputWrapper>
        <InputWrapper className="md: max-w-[250px]">
          <Select
            options={year_options}
            onValueChange={(e) => setYear(e)}
            value={year}
          />
        </InputWrapper>
        <InputWrapper className="md: max-w-[250px]">
          <Select
            options={[
              { text: "First", value: "1st" },
              { text: "Second", value: "2nd" },
            ]}
            onValueChange={(e) => setCutoff(e)}
            value={cutoff}
          />
        </InputWrapper>
        <Button
          size="sm"
          className="w-full sm:w-fit"
          type="submit"
          disabled={loading}
        >
          {loading ? "Loading" : "Filter"}
        </Button>
      </form>
    </Card>
  );
};
export default FilterCard;
