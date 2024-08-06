import Loader from "./Loader";

export const PageLoader: React.FC = () => {
  return (
    <div className="w-full h-full flex place-content-center place-items-center">
      <Loader size="base" />
    </div>
  );
};
export default PageLoader;
