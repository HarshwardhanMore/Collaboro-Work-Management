"use client";

import { useSearchParams } from "next/navigation"; 
import Layout from "./(components)/layout";
import ProjectInfoCard from "./(components)/ProjectInfoCard";
import ExploreAllSprintsCard from "./(components)/ExploreAllSprintsCard";
import ExploreMoreCard from "./(components)/ExploreMoreCard";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingComponent from "@/components/custom/LoadingComponent";

const route = async () => {
  
  const searchParams = useSearchParams();
  const status = searchParams.get("organizationName")!;
  const projectId = searchParams.get("projectId")!;
  // const data = JSON.parse(searchParams.get("data")!);
  // const 

  
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // fetch("/api/organizations")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setData(data);
    //     setLoading(false);
    //   });
    axios
      .post("/api/projects/getDetailsById", {projectId})
      // .then((res) => res.data)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <LoadingComponent/>;
  if (!data) return <p>No profile data</p>;

  return (
    <Layout>
      
      <div className=" h-full w-full px-4 py-2 grid grid-cols-4 grid-rows-3 gap-x-4 gap-y-4">

      {/*
        <div className="w-full h-full col-span-2">
          <ProjectInfoCard img="Company-bro" title={data?.name} data={data}/>
        </div>
        
        <div className="w-full h-full col-span-1">
          <ExploreMoreCard img="Company-bro" title={"Sprints"} href1=""/>
        </div>

        <div className="w-full h-full col-span-3">
          <ExploreAllSprintsCard img="Company-bro" title={"Sprints"} data={data}/>
        </div>
        
        <div className="w-full h-full col-span-1">
          <ExploreMoreCard img="Company-bro" title={"Resources"} href1=""/>
        </div>

        <div className="w-full h-full col-span-1">
          <ExploreMoreCard img="Company-bro" title={"Timeline"} href1=""/>
        </div>

        <div className="w-full h-full col-span-1">
          <ExploreMoreCard img="Company-bro" title={"Performance"} href1=""/>
        </div>
  */}
        <div className="w-full h-full row-span-3 col-span-3">
          <ProjectInfoCard img="Company-bro" title={data?.name} links="" timeline="" evaluation="" resources="" explore="" data={data}/>
        </div>

        <div className="w-full h-full row-span-3 col-span-1">
          <ExploreAllSprintsCard img="Company-bro" title={"Sprints"} data={data}/>
        </div>
        
        
      </div>
    </Layout>
  )
}

export default route