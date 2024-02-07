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

const FilterCard: React.FC = () => {
  const [month, setMonth] = useState(getCurrentMonthNumber().toString());
  const [year, setYear] = useState("2024");
  const [cutoff, setCutoff] = useState(getCurrentCutoff());
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Card
      title="Filter Money Sheet"
      sub="Select filter to display data"
      className="w-full lg:w-9/12"
    >
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
        <Button size="sm" className="w-full sm:w-fit" type="submit">
          Generate
        </Button>
      </form>
    </Card>
  );
};
export default FilterCard;
