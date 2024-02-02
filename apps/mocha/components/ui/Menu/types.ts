export type menuItem = {
  title: string;
  onClick?: () => void;
};

export type menu = {
  title: string;
  items: menuItem[];
}[];

export interface IMenuProps {
  options: menu;
  children: React.ReactNode;
}
