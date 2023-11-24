import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/custom/Navigation";
// import NavComponents from "./navigation-components";
import NavComponents from "@/components/custom/layouts/components";
import SearchIcon from "@mui/icons-material/Search";
import ThemeToggle from "@/components/theme-toggle";

const inter = Inter({ subsets: ["latin"] });

export default function OrganizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full flex flex-col px-4">
      <div className=" h-[12%] w-full flex flex-row justify-between items-center">
        <Navigation NavComponents={NavComponents} className=" w-1/2 h-full" />
        <div className=" flex flex-row justify-end items-center w-1/2 h-full">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search"
            className=" w-2/5 px-2 py-2 text-sm  border-b-2 outline-none ring-0 focus:border-black transition-all mr-2"
          />
          <ThemeToggle />
        </div>
      </div>
      <div className=" h-[87%] w-full">{children}</div>
    </div>
  );
}
