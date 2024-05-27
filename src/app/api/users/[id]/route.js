import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;

  if (id === "123") {
    return NextResponse.json({
      name: "Aaron",
      age: 10,
    });
  }
  return new NextResponse();
}
