import SidebarNav from "../../../../components/ui/SideNav/SideNav";
import Breadcrumbs from "./Breadcrumbs";
interface IPageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<IPageLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="flex h-full absolute top-0 w-screen">
        <SidebarNav />
        <div className="pt-20 px-4 w-full">
          <Breadcrumbs />
          <div className="pt-1">{children}</div>
        </div>
      </div>
    </>
  );
};
export default PageLayout;
