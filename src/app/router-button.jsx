"use client";

import { useRouter } from "next/navigation";

export default function RouterButton() {
  const router = useRouter();
  return (
    <div className="flex-row">
      <div
        onClick={() => {
          router.back();
        }}
        className={"border-2 border-solid p-[10px] border-white inline-block"}
      >
        {"뒤로이동"}
      </div>
      <div
        onClick={() => {
          router.refresh();
        }}
        className={"border-2 border-solid p-[10px] border-white inline-block"}
      >
        {"새로고침"}
      </div>
      <div
        onClick={() => {
          router.forward();
        }}
        className={"border-2 border-solid p-[10px] border-white inline-block"}
      >
        {"앞으로이동"}
      </div>
    </div>
  );
}
