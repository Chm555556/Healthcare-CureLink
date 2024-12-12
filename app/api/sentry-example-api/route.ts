// import { NextResponse } from "next/server";

// export const dynamic = "force-dynamic";

// // A faulty API route to test Sentry's error monitoring
// export function GET() {
//   throw new Error("Sentry Example API Route Error");
//   return NextResponse.json({ data: "Testing Sentry Error..." });
// }
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// A simple API route
export function GET() {
  // You can implement your logic here, for example:
  return NextResponse.json({ data: "Testing API response..." });
}
