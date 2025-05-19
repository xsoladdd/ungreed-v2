import { auth } from "@/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { routes } from "./app/dashboard/routes";

export async function middleware(request: NextRequest) {
  const session = await auth();
  const isLoggedIn = !!session;
  const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");

  // Handle authentication
  if (isOnDashboard && !isLoggedIn) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  // Handle dashboard route validation
  if (isOnDashboard) {
    const pathname = request.nextUrl.pathname;
    const isValidRoute = routes.some((route) => route.href === pathname);

    if (pathname !== "/dashboard" && !isValidRoute) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    // Allow /dashboard but redirect invalid routes to /dashboard/main
    // if (pathname !== "/dashboard/main" && !isValidRoute) {
    //   return NextResponse.redirect(new URL("/dashboard/main", request.url));
    // }
  }

  return NextResponse.next();
}

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
