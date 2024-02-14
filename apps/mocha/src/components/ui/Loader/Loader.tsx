import { cn } from "@/lib/utils";

interface LoaderProps {
  size?: "sm" | "base" | "xl";
}

const Loader: React.FC<LoaderProps> = ({ size = "base" }) => {
  return (
    <>
      <div
        className={cn(
          "inline-block animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
          size === "sm" ? "h-4 w-4" : size === "xl" ? "h-16 w-16" : "h-8 w-8"
        )}
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </>
  );
};
export default Loader;
