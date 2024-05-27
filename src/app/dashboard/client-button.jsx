"use client"; //use를 사용한 react hook을 사용하면 최상단에 항상 추가해야 작동함
import { useRouter } from "next/navigation";

export default function ClientMenuButton({ href, children }) {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(href);
      }}
      style={{ border: "solid 1px white", padding: 10 }}
    >
      {children}
    </div>
  );
}
