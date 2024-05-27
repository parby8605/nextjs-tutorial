import Link from "next/link";
import ClientMenuButton from "@/app/dashboard/client-button";
import MenuButton from "@/app/dashboard/menuButton";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <ClientMenuButton href="/">Logo</ClientMenuButton>
        <MenuButton href="/dashboard">1. Dashboard</MenuButton>
        <MenuButton href="/dashboard/invoices">2. Invoices</MenuButton>
        <MenuButton href="/dashboard/customers">3. Customers</MenuButton>
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        <div className="w-full h-[100px] bg-red-500" />
        {children}
      </div>
    </div>
  );
}
