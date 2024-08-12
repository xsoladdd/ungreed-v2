import React, { ReactNode } from "react";
import { Button } from "../button";
import {
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialog as Base,
} from "./base";

interface IAlertDialogProps {
  isOpen?: boolean;
  handleOpen?: () => void;
  handleSubmit?: () => void;
  handleClose?: () => void;
  button?: ReactNode;
  title?: ReactNode;
  children?: ReactNode;
  loading?: boolean;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
}

const AlertDialog: React.FC<IAlertDialogProps> = ({
  isOpen,
  handleOpen,
  handleClose,
  handleSubmit,
  button,
  children,
  title,
  loading = false,
  variant = "default",
}) => {
  return (
    <>
      <Base open={isOpen} onOpenChange={() => handleOpen && handleOpen()}>
        {button && <AlertDialogTrigger>{button}</AlertDialogTrigger>}
        <AlertDialogContent className=" w-full max-w-[300px] md:max-w-[600px]">
          <AlertDialogHeader>
            <AlertDialogTitle>
              {title ? title : "Are you absolutely sure?"}
            </AlertDialogTitle>
            {children && (
              <AlertDialogDescription className="">
                {children}
              </AlertDialogDescription>
            )}
          </AlertDialogHeader>
          <AlertDialogFooter className="flex gap-3">
            <Button onClick={handleClose} disabled={loading} variant="outline">
              Close
            </Button>
            <Button onClick={handleSubmit} disabled={loading} variant={variant}>
              {loading ? "Loading" : "Continue"}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </Base>
    </>
  );
};
export default AlertDialog;
