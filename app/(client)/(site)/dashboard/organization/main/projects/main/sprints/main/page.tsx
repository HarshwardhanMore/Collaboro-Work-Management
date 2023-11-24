"use client";

import { useSearchParams } from "next/navigation"; 
import Layout from "../(components)/layout";
import SprintInfoCard from "../(components)/SprintInfoCard";
import ExploreAllTasksCard from "../(components)/ExploreAllTasksCard";
import SprintTeamCard from "../(components)/SprintTeamCard";
import ExploreMoreCard from "../(components)/ExploreMoreCard";

const route = () => {
  
  const searchParams = useSearchParams();
//   const status = searchParams.get("organizationName")!;
  const data = JSON.parse(searchParams.get("data")!);

  return (
    <Layout>
      
      <div className=" h-full w-full px-4 py-2 grid grid-cols-4 grid-rows-5 gap-x-4 gap-y-4">

        {/* <div className="w-full h-full col-span-2">
          <SprintInfoCard img="Company-bro" title={data.name} data={data}/>
        </div>
        
        <div className="w-full h-full col-span-1">
          <ExploreMoreCard img="Company-bro" title={"Sprints"} href1=""/>
        </div>

        <div className="w-full h-full col-span-3">
          <ExploreAllTasksCard img="Company-bro" title={"Tasks"} data={data}/>
        </div>
        
        <div className="w-full h-full col-span-2">
          <SprintTeamCard img="Company-bro" title={"Team"} data={data}/>
        </div>

        <div className="w-full h-full col-span-1">
          <ExploreMoreCard img="Company-bro" title={"Performance"} href1=""/>
        </div> */}

        <div className="w-full h-full row-span-4 col-span-2">
          <SprintInfoCard img="Company-bro" title={data.name} data={data}/>
        </div>
        
        {/* <div className="w-full h-full col-span-1">
          <ExploreMoreCard img="Company-bro" title={"Sprints"} href1=""/>
        </div> */}

        <div className="w-full h-full row-span-2 col-span-2">
          <ExploreAllTasksCard img="Company-bro" title={"Tasks"} data={data}/>
        </div>
        
        <div className="w-full h-full row-span-2 col-span-2">
          <SprintTeamCard img="Company-bro" title={"Team"} data={data}/>
        </div>

        <div className="w-full h-full row-span-1 col-span-1">
          <ExploreMoreCard img="Company-bro" title={"Performance"} href1=""/>
        </div>
        <div className="w-full h-full row-span-1 col-span-1">
          <ExploreMoreCard img="Company-bro" title={"Performance"} href1=""/>
        </div>
        <div className="w-full h-full row-span-1 col-span-1">
          <ExploreMoreCard img="Company-bro" title={"Performance"} href1=""/>
        </div>
        <div className="w-full h-full row-span-1 col-span-1">
          <ExploreMoreCard img="Company-bro" title={"Performance"} href1=""/>
        </div>
        

        
        
      </div>
    </Layout>
  )
}

export default route