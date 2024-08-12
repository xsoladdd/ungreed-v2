export type option = { value: string; text: string };

export type options = Array<option>;

export interface SelectProps {
  options?: options;
  value?: string;
  onValueChange?: (e: any) => void;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}
