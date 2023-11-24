"use client";

import React from "react";
import Navigation from "@/components/custom/Navigation";
import NavComponents from "./navigation-components";
import SearchIcon from "@mui/icons-material/Search";
import ThemeToggle from "@/components/theme-toggle";
import { UserProfile, useAuth } from "@clerk/nextjs";

import DashboardCard from "@/components/custom/dashboard/DashboardCard";
import ExploreMoreCard from "./(components)/ExploreMoreCard";
import LandingPage from "./(components)/Landing";
import ExploreAllOrganizations from "./(components)/ExploreAllOrganizations";
// import { useAuth } from "@clerk/nextjs";


const DashboardPage = () => {
  const userId = useAuth();
  console.log(userId);
  return (
    <div className=" w-full h-full flex flex-col">
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
      <div className=" h-[87%] w-full px-4 py-2 grid grid-rows-3 grid-cols-4 gap-x-4 gap-y-4">
        
        <div className="w-full h-full row-span-3 col-span-3">
          <ExploreAllOrganizations href1={"/dashboard/organization"} btnTitle={"Explore"}/>
          {/* <DashboardCard img="Company-bro" title={"All Organization"} href1="/dashboard/organization" href2=""/> */}
        </div>

        {/* <div className="w-full h-full row-span-3 col-span-1">
          <ExploreMoreCard img="Company-bro" title={"All Organization"} href1="" href2=""/>
        </div> */}
        
        <div className="w-full h-full row-span-1 col-span-1">
          <ExploreMoreCard img="Business growth-pana" title={"Created Organizations"} href1="/dashboard/organization/me/created" btnTitle={"Explore"}/>
        </div>
        
        <div className="w-full h-full row-span-1 col-span-1">
          <ExploreMoreCard img="Business deal-rafiki" title={"Joined Organizations"} href1="/dashboard/organization/me" btnTitle={"Explore"}/>
        </div>
        
        <div className="w-full h-full row-span-1 col-span-1">
          <ExploreMoreCard img="Business deal-rafiki" title={"Create An Organization"} href1="/dashboard/organization/create" btnTitle={"Create"}/>
        </div>

      </div>
    </div>
  );
};

export default DashboardPage;
