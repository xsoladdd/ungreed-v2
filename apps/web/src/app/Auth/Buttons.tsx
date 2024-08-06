"use client";
import React, { useState } from "react";
// import { signIn } from "next-auth/react";
import { Icons } from "@/components/ui/Icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";

const Buttons: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className={cn("grid gap-3 lg:w-[300px] w-full")}>
      <Button
        variant="outline"
        type="button"
        disabled={isLoading}
        onClick={() => {
          setIsLoading(true);
          signIn("github");
        }}
        // className="max-w-[400px]"
      >
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{" "}
        GitHub
      </Button>
      <Button
        variant="outline"
        type="button"
        disabled={isLoading}
        onClick={() => {
          setIsLoading(true);
          signIn("google");
        }}
        // className="max-w-[400px]"
      >
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button>
    </div>
  );
};
export default Buttons;
