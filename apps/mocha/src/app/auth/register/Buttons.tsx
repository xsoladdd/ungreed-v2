"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/Icons";
// import { useInsertUserMutation } from "@/graphql/generated/graphql";

const Buttons: React.FC = () => {
  const [isLoading] = React.useState<boolean>(false);

  return (
    <div className={cn("grid gap-6")}>
      <Button
        variant="outline"
        type="button"
        disabled={isLoading}
        onClick={() => signIn("github")}
      >
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{" "}
        GitHub
      </Button>
    </div>
  );
};
export default Buttons;
