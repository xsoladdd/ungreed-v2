import { Label } from "@/components/ui/label";
import { ReactNode } from "react";

interface IFormControlProps {
  children: ReactNode;
  label?: string;
}

const FormControl: React.FC<IFormControlProps> = ({ children, label }) => {
  return (
    <>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          {label && label}
        </Label>
        <div className="col-span-3">{children}</div>
      </div>
    </>
  );
};
export default FormControl;
