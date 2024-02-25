import Image from "next/image";
import { Separator } from "../ui/separator";
import SidebarNav from "../ui/SideNav/SideNav";

interface IPageLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
  caption?: string;
  SideBar?: React.ReactNode;
}

const PageLayout: React.FC<IPageLayoutProps> = ({
  SideBar,
  children,
  caption,
  pageTitle,
}) => {
  return (
    <>
      <div className="p-5 md:p-10 space-y-6  pb-16 ">
        <div className="flex justify-between">
          <div className="space-y-0.5">
            <h2 className="text-2xl font-bold tracking-tight">{pageTitle}</h2>
            <p className="hidden md:block text-muted-foreground">{caption}</p>
          </div>
          <div className="md:hidden">Hamburger</div>
        </div>
        <Separator className="md:my-6" />
        <div className=" flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          {/* -mx-4 */}
          <aside className="w-full lg:max-w-[250px]">{SideBar}</aside>
          <div className="flex-1 ">{children}</div>
        </div>
      </div>
    </>
  );
};
export default PageLayout;
