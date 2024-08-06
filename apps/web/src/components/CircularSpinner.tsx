import { cn } from "@/lib/utils";

const CircularSpinner: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...rest
}) => {
  return (
    <div
      className={cn(
        `w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin`,
        className
      )}
      {...rest}
    />
  );
};
export default CircularSpinner;
