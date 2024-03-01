import Image from "next/image";
import Buttons from "./Buttons";

const page: React.FC = async () => {
  return (
    <div className="h-full flex gap-5 flex-col place-content-center  ">
      <div className="flex flex-col space-y-2 text-center ">
        <div className="w-full flex place-content-center lg:hidden">
          <Image
            alt="Logo"
            height={32}
            priority
            src="/logo.svg"
            width={150}
            className=""
          />
        </div>
        <h1 className="text-2xl font-bold hidden lg:block">WELCOME</h1>
        <p className="text-sm text-muted-foreground">Signin to continue</p>
      </div>
      <div className="flex w-full place-content-center lg:py-4">
        <Buttons />
      </div>
    </div>
  );
};
export default page;
