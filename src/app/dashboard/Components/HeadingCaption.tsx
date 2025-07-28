import React from "react";

const HeadingCaption: React.FC<{
  title: string | React.ReactNode;
  caption: string | React.ReactNode;
  right?: React.ReactNode;
}> = ({ title, caption, right }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 pb-12 pt-4 px-2 justify-between ">
      <div className="flex flex-col ">
        <h1 className="text-2xl font-bold">{title}</h1>
        <span className="text-sm text-muted-foreground">{caption}</span>
      </div>
      <div className="flex place-items-end">{right}</div>
    </div>
  );
};
export default HeadingCaption;
