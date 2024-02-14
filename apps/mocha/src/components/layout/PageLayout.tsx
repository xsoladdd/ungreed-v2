import Image from "next/image";
import { Separator } from "../ui/separator";
import SidebarNav from "../ui/SideNav/SideNav";

interface IPageLayoutProps {
  sideBarItems: {
    title: string;
    href: string;
  }[];
  children: React.ReactNode;
  pageTitle?: string;
  caption?: string;
}

const PageLayout: React.FC<IPageLayoutProps> = ({
  sideBarItems,
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
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sideBarItems} />
          </aside>
          <div className="flex-1 ">{children}</div>
        </div>
      </div>
    </>
  );
};
export default PageLayout;
