import { PageLoader } from "@/components/ui/Loader";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="pt-[30vh]">
      <PageLoader />
    </div>
  );
}
