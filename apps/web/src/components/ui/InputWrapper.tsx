import { cn } from "@/lib/utils";
import { Label } from "./label";

type InputWrapperProps = {
  children: React.ReactNode;
  className?: string;
  label?: string;
  htmlFor?: string;
};

const InputWrapper: React.FC<InputWrapperProps> = ({
  children,
  className,
  label,
  htmlFor,
}) => (
  <div className={cn("w-full flex gap-2 flex-col ", className)}>
    {label && <Label htmlFor={htmlFor}>{label}</Label>}
    {children}
  </div>
);

export default InputWrapper;
