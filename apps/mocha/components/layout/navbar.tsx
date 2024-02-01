"use client";

import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function NavBar({ session }: { session: Session | null }) {
  console.log(session);
  return (
    <>
      {/* <button
        onClick={() => {
          signIn("google");
        }}
      >
        Sign in
      </button>
      <button
        onClick={() => {
          signOut();
        }}
      >
        Sign out
      </button> */}
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
