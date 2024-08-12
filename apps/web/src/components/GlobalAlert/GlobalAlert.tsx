"use client";

import { ReactNode } from "react";

import CircularSpinner from "../CircularSpinner";
import {
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialog as Base,
} from "../ui/AlertDialog/base";
import { useGlobalAlertContext } from "./useGlobalAlertContext";

export interface GlobalAlertP {
  isOpen?: boolean;
  isLoading?: boolean;
  title?: ReactNode | string;
  children?: ReactNode | string;
  footer?: ReactNode | string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
}

const GlobalAlert: React.FC = () => {
  const { props, setProps } = useGlobalAlertContext();
  return (
    <>
      <Base
        aria-modal
        // title={title}
        open={props.isOpen}
        // loading={isLoading}
        // variant={variant}
        onOpenChange={() => setProps("isOpen", false)}
      >
        {/* {button && <AlertDialogTrigger>{button}</AlertDialogTrigger>} */}
        <AlertDialogContent className=" w-full max-w-[300px] md:max-w-[600px]">
          <AlertDialogHeader>
            <AlertDialogTitle>
              {props.title ? props.title : "Are you absolutely sure?"}
            </AlertDialogTitle>
            {props.isLoading && (
              <div>
                <CircularSpinner />
              </div>
            )}
            {!props.isLoading && props.children && (
              <AlertDialogDescription className="">
                {props.children}
              </AlertDialogDescription>
            )}
          </AlertDialogHeader>
          <AlertDialogFooter className="flex gap-3">
            {props.footer}
          </AlertDialogFooter>
        </AlertDialogContent>
        {/* {children} */}
      </Base>
    </>
  );
};
export default GlobalAlert;
