import Buttons from "./Buttons";

const page: React.FC = async () => {
  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Login your account
        </h1>
        <p className="text-sm text-muted-foreground">Sign in to continue.</p>
      </div>
      <div className="flex w-full place-content-center lg:py-4">
        <Buttons />
      </div>
    </>
  );
};
export default page;
