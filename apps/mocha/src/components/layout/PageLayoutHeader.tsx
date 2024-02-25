"use client";
import { MouseEvent } from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

interface IPageLayoutHeaderProps {
  title: string;
  caption?: string;
  button?: {
    title: string;
    // eslint-disable-next-line no-undef
    onClick: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
    disabled?: boolean;
  };
}

const PageLayoutHeader: React.FC<IPageLayoutHeaderProps> = ({
  caption,
  title,
  button,
}) => {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">{caption}</p>
        </div>
        {button && (
          <Button
            variant="outline"
            className="h-8 my-auto"
            size="sm"
            onClick={(e) => button.onClick(e)}
            disabled={button.disabled}
            // onClick={(e) => console.log('aw')}
          >
            {button.title}
          </Button>
        )}
      </div>
      <Separator className="my-4" />
    </>
  );
};
export default PageLayoutHeader;
