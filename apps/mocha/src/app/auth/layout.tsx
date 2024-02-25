import type { Metadata } from "next";
import Image from "next/image";
import Nav from "./Nav";
// import { getServerSession } from "next-auth";
// import { authOption } from "../api/auth/[...nextauth]/helper";
// import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "UNGREED | AUTH",
  description: "Authentication",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await getServerSession(authOption);

  // if (session?.user) {
  //   redirect(`/dashboard`);
  // }
  return (
    <>
      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Nav />
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Image
              alt="Logo"
              height={24}
              priority
              src="/logo.svg"
              width={100}
            />
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Accounting is the art of turning chaos into clarity and
                confusion into financial wisdom.&rdquo;
              </p>
              <footer className="text-sm">Samantha Wilson</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">{children}</div>
      </div>

      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] h-screen place-items-center">
        {children}
      </div>
    </>
  );
}
