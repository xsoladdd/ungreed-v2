"use client";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

interface IPageLayoutHeaderProps {
  title: string;
  caption?: string;
  button?: {
    title: string;
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
    disabled?: boolean;
  };
}

const PageLayoutHeader: React.FC<IPageLayoutHeaderProps> = ({
  caption,
  title,
  button,
}) => {
  return (
    <div className="w-full ">
      <div className="flex justify-between w-full ">
        <div>
          <h3 className="text-lg font-medium pb-[2px]">{title}</h3>
          <p className="text-sm text-muted-foreground">{caption}</p>
        </div>
        {button && (
          <Button
            variant="secondary"
            className="h-8 my-auto"
            size="sm"
            onClick={(e: React.MouseEvent<HTMLElement>) => button.onClick(e)}
            disabled={button.disabled}
          >
            {button.title}
          </Button>
        )}
      </div>
      <Separator className="my-4" />
    </div>
  );
};

export default PageLayoutHeader;
