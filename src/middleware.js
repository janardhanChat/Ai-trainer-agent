import { NextResponse } from "next/server";

export function middleware(req) {
  // Get the user token from cookies
  const userToken = req.cookies.get("userToken");

  // Define the protected routes
  const protectedRoutes = [
    "/health-check-screen",
    "/select-personas",
    "/video-screen",
    "/generate-report",
  ];

  // Check if the route is protected
  if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
    if (!userToken) {
      // If no userToken, redirect to the login page
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  if (req.nextUrl.pathname === "/" && userToken) {
    return NextResponse.redirect(new URL("/select-personas", req.url));
  }

  // Allow access to non-protected routes or if userToken exists
  return NextResponse.next();
}
