import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface IStaticLabelProps {
  label: string;
  htmlFor: string;
}

const StaticLabel: React.FC<IStaticLabelProps> = ({ label, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="text-sm ">
      {label}
    </label>
  );
};
export default StaticLabel;
