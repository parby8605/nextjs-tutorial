import { NextResponse } from "next/server";

export async function POST(request, { params }) {
  const { id } = params;
  const { address, age } = await request.json();
  //   const { searchParams } = new URL(request.url);
  //   console.log(searchParams.get("address"));
  //   console.log(searchParams.get("age"));
  console.log("전달받은 params : ", address, age);

  if (id === "123") {
    return NextResponse.json({
      name: "Aaron",
      ...(age === "true" ? { age: 10 } : {}),
      ...(address === "true" ? { address: "경기도 고양시" } : {}),
    });
  }
  return new NextResponse();
}
