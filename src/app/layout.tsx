import RouterButton from "@/app/router-button";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My New Next Project",
  description: "Ha------------rd",
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
