"use client";
import Card from "@/components/ui/Card";
import Select from "@/components/ui/Select";
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

const FilterCard: React.FC = () => {
  const [getLedger, { loading }] = useGetLedgerLazyQuery({
    onCompleted: (x) => console.log(x),
    onError: (err) => console.log("error", err),
  });

  const [month, setMonth] = useState(getCurrentMonthNumber().toString());
  const [year, setYear] = useState("2024");
  const [cutoff, setCutoff] = useState(getCurrentCutoff());

  const email = useZustand((state) => state.user.email);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ month: parseInt(month), year: parseInt(year), email });
    getLedger({
      variables: {
        month: parseInt(month),
        year: parseInt(year),
        email,
      },
    });
  };

  return (
    <Card
      title="Filter Money Sheet"
      sub="Select filter to display data"
      className="w-full lg:w-9/12"
    >
      {/* {JSON.stringify(data)} */}
      <form className="flex gap-4 flex-col sm:flex-row" onSubmit={handleSubmit}>
        <InputWrapper>
          <Select
            options={months_options}
            onValueChange={(e) => setMonth(e)}
            value={month}
          />
        </InputWrapper>
        <InputWrapper>
          <Select
            options={year_options}
            onValueChange={(e) => setYear(e)}
            value={year}
          />
        </InputWrapper>
        <InputWrapper>
          <Select
            options={[
              { text: "First", value: "1" },
              { text: "Second", value: "2" },
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
          {loading ? "Loading" : "Generate"}
        </Button>
      </form>
    </Card>
  );
};
export default FilterCard;
