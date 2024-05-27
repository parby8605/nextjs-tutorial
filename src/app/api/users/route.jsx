//

import { NextResponse } from "next/server";

//
export async function GET(request, context) {
  const { searchParams } = new URL(request.url);

  console.log(searchParams.get("hello"));
  console.log(context);

  return new NextResponse("hello, world!");
}
