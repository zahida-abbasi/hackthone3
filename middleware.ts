import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

// Ensure middleware applies only to relevant routes
export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
    "/sign-in/[[...rest]]", // Include the catch-all for the sign-in route
  ],
};
