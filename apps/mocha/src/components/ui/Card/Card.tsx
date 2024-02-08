import React, { ReactNode } from "react";
import {
  Card as BaseCard,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./base-card";
import { cn } from "@/lib/utils";

interface IcardProps {
  title?: string;
  sub?: string;
  children?: ReactNode;
  className?: string;
  buttonArea?: React.ReactNode;
}

const Card: React.FC<IcardProps> = ({
  title,
  sub,
  children,
  className,
  buttonArea,
}) => {
  return (
    <>
      <BaseCard className={className}>
        <div className="flex justify-between place-items-center">
          <CardHeader className="">
            {title && <CardTitle>{title}</CardTitle>}
            {sub && <CardDescription>{sub}</CardDescription>}
          </CardHeader>
          <div className="p-4">{buttonArea}</div>
        </div>

        <CardContent className={cn(!title && "pt-4")}>{children}</CardContent>
      </BaseCard>
    </>
  );
};
export default Card;
