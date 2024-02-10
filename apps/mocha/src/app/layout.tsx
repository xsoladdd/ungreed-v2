import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import Nav from "../components/layout/nav";
import { ThemeProvider } from "@/components/providers/theme-provider";
import ApolloProvider from "./Providers/ApolloProvider";
import ToastProvider from "./Providers/ToastProvider";

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "UNGREED",
  description: "Made for those who tracks budget",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-primary- font-sans antialiased",
          fontSans.variable
        )}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ToastProvider>
            <ApolloProvider>{children}</ApolloProvider>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
