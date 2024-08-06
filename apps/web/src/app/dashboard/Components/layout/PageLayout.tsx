import SidebarNav from "../../../../components/ui/SideNav/SideNav";
interface IPageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<IPageLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="flex h-full absolute top-0">
        <SidebarNav />
        <div className="pt-20 px-4">{children}</div>
      </div>
    </>
  );
};
export default PageLayout;
