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
  handleCancel?: () => void;
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
  handleCancel,
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
        <AlertDialogContent className="w-[5000px]">
          <AlertDialogHeader>
            <AlertDialogTitle>
              {title ? title : "Are you absolutely sure?"}
            </AlertDialogTitle>
            {children && (
              <AlertDialogDescription>{children}</AlertDialogDescription>
            )}
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button onClick={handleCancel} disabled={loading} variant="outline">
              Cancel
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
