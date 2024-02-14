import { Separator } from "../ui/separator";

interface IPageLayoutHeaderProps {
  title: string;
  caption?: string;
}

const PageLayoutHeader: React.FC<IPageLayoutHeaderProps> = ({
  caption,
  title,
}) => {
  return (
    <>
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{caption}</p>
      </div>
      <Separator className="my-4" />
    </>
  );
};
export default PageLayoutHeader;
