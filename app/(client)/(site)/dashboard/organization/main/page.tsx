"use client";

import React from "react";
import Layout from "./(components)/layout";
import Card from "./(components)/NavigationCard";

import { useSearchParams } from "next/navigation";
import ExploreMoreCard from "./(components)/ExploreMoreCard";
import UpdatesCard from "./(components)/UpdatesCard";
import ExploreAllTeams from "./(components)/ExploreAllTeams";
import ExploreAllEmployees from "./(components)/ExploreAllEmployees";
import ExploreAllProjectsCard from "./(components)/ExploreAllProjectsCard";
import ExploreAllProjectsCard2 from "./(components)/ExploreAllProjectsCard2";

const page = () => {
  const searchParams = useSearchParams();
  const data = JSON.parse(searchParams.get("data")!);
   
  console.log("data : ", data.OrganizationPerson);

  return (
    <Layout>
      
      <div className=" h-full w-full px-4 py-2 grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-4">
        <div className="w-full h-full col-span-1 row-span-1">
          <ExploreMoreCard img="Business deal-rafiki" title={"Explore"} href1="dashboard/organization/me" href2=""/>
        </div>
        
        <div className="w-full h-full row-span-1 col-span-1">
          <ExploreAllProjectsCard2 img="Company-bro" title={"Projects"} data={data}/>
        </div>

        <div className="w-full h-full row-span-1 col-span-1">
          <ExploreAllTeams img="Business growth-pana" title={"Teams"} data={data}/>
        </div>
        
        {/* <div className="w-full h-full col-span-1">
          <UpdatesCard img="Business deal-rafiki" title={"Updates"} href1="dashboard/organization/me" href2=""/>
        </div> */}

        <div className="w-full h-full row-span-1 col-span-1">
          <ExploreAllEmployees img="Business deal-rafiki" title={"Employees"} organizationName={data.name} OrganizationPerson={data.OrganizationPerson}/>
        </div>
        
      </div>
    </Layout>
  );
};

export default page;


/*

"use client";

import React from "react";
import Layout from "./(components)/layout";
import Card from "./(components)/NavigationCard";

import { useSearchParams } from "next/navigation";
import ExploreMoreCard from "./(components)/ExploreMoreCard";
import UpdatesCard from "./(components)/UpdatesCard";
import ExploreAllTeams from "./(components)/ExploreAllTeams";
import ExploreAllEmployees from "./(components)/ExploreAllEmployees";
import ExploreAllProjectsCard from "./(components)/ExploreAllProjectsCard";
import ExploreAllProjectsCard2 from "./(components)/ExploreAllProjectsCard2";

const page = () => {
  const searchParams = useSearchParams();
  const data = JSON.parse(searchParams.get("data")!);
   
  console.log("data : ", data);

  return (
    <Layout>
      
      <div className=" h-full w-full px-4 py-2 grid grid-cols-3 grid-rows-3 gap-x-4 gap-y-4">
        <div className="w-full h-full col-span-3">
          <ExploreAllProjectsCard2 img="Company-bro" title={"Projects"} data={data}/>
        </div>
        
        <div className="w-full h-full col-span-2">
          <ExploreAllTeams img="Business growth-pana" title={"Teams"} data={data}/>
        </div>
        
        <div className="w-full h-full col-span-1">
          <UpdatesCard img="Business deal-rafiki" title={"Updates"} href1="dashboard/organization/me" href2=""/>
        </div>

        <div className="w-full h-full col-span-2">
          <ExploreAllEmployees img="Business deal-rafiki" title={"Employees"} href1="dashboard/organization/me" href2=""/>
        </div>

        <div className="w-full h-full col-span-1">
          <ExploreMoreCard img="Business deal-rafiki" title={"Explore"} href1="dashboard/organization/me" href2=""/>
        </div>
        
      </div>
    </Layout>
  );
};

export default page;


*/