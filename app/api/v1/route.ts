import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";

export async function GET() {
  try {
    await connectDB();

    return NextResponse.json(
      {
        message:
          "Welcome to Quotify API v1! Your quotes API is live. Visit /docs for full API documentation and usage examples.",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong in the API route.", error },
      { status: 500 }
    );
  }
}
