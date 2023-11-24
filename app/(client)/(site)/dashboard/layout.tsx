import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/custom/Sidebar";
import CheckAuth from "@/components/custom/CheckAuth";
import { SidebarComponents } from "./sidebar-components";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" w-screen h-screen flex overflow-hidden font-nunito">
      <Sidebar data={SidebarComponents} />
      <div className=" h-full w-full px-4 ">
        <CheckAuth />
        {children}
      </div>
    </div>
  );
}
