import React, { ReactNode } from "react";
import {
  AlertDialog as Base,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./base";

interface IAlertDialogProps {
  isOpen?: boolean;
  handleOpen?: () => void;
  handleSubmit?: () => void;
  handleCancel?: () => void;
  button?: ReactNode;
  title?: ReactNode;
  children?: ReactNode;
}

const AlertDialog: React.FC<IAlertDialogProps> = ({
  isOpen,
  handleOpen,
  handleCancel,
  handleSubmit,
  button,
  children,
  title,
}) => {
  return (
    <>
      <Base open={isOpen} onOpenChange={() => handleOpen && handleOpen()}>
        {button && <AlertDialogTrigger>{button}</AlertDialogTrigger>}
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {title ? title : "Are you absolutely sure?"}
            </AlertDialogTitle>
            {children && (
              <AlertDialogDescription>{children}</AlertDialogDescription>
            )}
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleCancel}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleSubmit} className="bg-primary">
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </Base>
    </>
  );
};
export default AlertDialog;
