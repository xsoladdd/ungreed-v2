import Card from "@/components/ui/Card";
import React from "react";

const AddEditCard: React.FC = () => {
  return (
    <>
      <Card
        title="Add new statement / Edit Statement"
        sub="Create new statement / Editing Statement: #12341234"
        className="w-full lg:w-5/12"
      ></Card>
    </>
  );
};
export default AddEditCard;
