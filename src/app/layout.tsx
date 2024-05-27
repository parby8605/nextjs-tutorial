import RouterButton from "@/app/router-button";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "애런의 새로운 Next 프로젝트",
  description: "애런의 앞으로 고생길이 훤하다",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-[100px] bg-red-300">
          <RouterButton />
        </div>
        {children}
      </body>
    </html>
  );
}
