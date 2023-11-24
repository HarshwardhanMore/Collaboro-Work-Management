"use client";

import { useSearchParams } from "next/navigation"; 
import Layout from "../(components)/layout";
import ExploreMoreCard from "../(components)/ExploreMoreCard";
import InformationCard from "./(components)/InformationCard";
import CheckResources from "./(components)/CheckResources";
import UpdateTask from "./(components)/UpdateTask";

const route = () => {
  
  const searchParams = useSearchParams();
//   const status = searchParams.get("organizationName")!;
  const data = JSON.parse(searchParams.get("data")!);

  return (
    <Layout>
      
      <div className=" h-full w-full px-4 py-2 grid grid-cols-3 grid-rows-3 gap-x-4 gap-y-4">

        <div className="w-full h-full col-span-2 row-span-2">
          <InformationCard img="Company-bro" title={"Sprints"} data={data}/>
        </div>
        
        <div className="w-full h-full col-span-1">
          <CheckResources img="Company-bro" title={"Sprints"} data={data}/>
        </div>

        <div className="w-full h-full col-span-1">
          <UpdateTask img="Company-bro" title={"Sprints"} data={data}/>
        </div>

        {/* <div className="w-full h-full col-span-3">
          <ExploreMoreCard img="Company-bro" title={"Sprints"} href1=""/>
        </div>
        
        <div className="w-full h-full col-span-2">
          <ExploreMoreCard img="Company-bro" title={"Sprints"} href1=""/>
        </div> */}

        
      </div>
    </Layout>
  )
}

export default route