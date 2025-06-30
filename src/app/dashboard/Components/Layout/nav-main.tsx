import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { sidebarRoutes } from "./sidebar-routes";

export function NavMain() {
  const items = sidebarRoutes.navMain;
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (url: string) => {
    router.push(url);
  };

  const isActive = (url: string) => {
    return pathname === url;
  };

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                onClick={() => handleClick(item.url)}
                className={cn(
                  "hover:text-primary-foreground active:bg-primary/90 cursor-pointer active:text-primary-foreground min-w-8 duration-200 ease-linear",
                  isActive(item.url) &&
                    "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
              >
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
