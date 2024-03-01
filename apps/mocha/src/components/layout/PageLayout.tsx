import { Separator } from "../ui/separator";

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
      <div className="p-5 md:p-10   pb-16 ">
        <div className="md:flex justify-betwee hidden space-y-6">
          <div className="space-y-0.5">
            <h2 className="text-2xl font-bold tracking-tight">{pageTitle}</h2>
            <p className="hidden md:block text-muted-foreground">{caption}</p>
          </div>
        </div>
        <Separator className="md:my-6 hidden md:block" />
        <div className=" flex flex-col md:space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="w-full lg:max-w-[250px] mb-4 ">{SideBar}</aside>
          <div className="flex-1 ">{children}</div>
        </div>
      </div>
    </>
  );
};
export default PageLayout;
