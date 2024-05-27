"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuButton({ href, children }) {
  //현재 페이지의 url이 뭘까
  const pathname = usePathname();
  const isCurrentHref = pathname === href;
  return (
    <Link
      href={href}
      className={clsx(
        "border-2 border-solid p-[10px] block",
        isCurrentHref ? "border-red-500" : " border-white"
      )}
    >
      {children}
    </Link>
  );
}
