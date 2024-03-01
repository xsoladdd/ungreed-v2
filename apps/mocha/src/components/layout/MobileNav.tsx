"use client";

import useToggle from "@/hooks/useToggle";
import { Icons } from "../ui/Icons";
import { Button } from "../ui/button";

interface IMobileNavProps {
  SideBar?: React.ReactNode;
}

const MobileNav: React.FC<IMobileNavProps> = ({ SideBar }) => {
  const [menuStatus, setMenuStatus] = useToggle(false);
  return (
    <>
      <Button size="icon" variant="outline" onClick={() => setMenuStatus(true)}>
        <Icons.dots />
      </Button>
    </>
  );
};
export default MobileNav;
