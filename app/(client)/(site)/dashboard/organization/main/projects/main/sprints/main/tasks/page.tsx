"use client";

import { useSearchParams } from "next/navigation"; 
import Layout from "./(components)/layout";
import ExploreMoreCard from "./(components)/ExploreMoreCard";
import { useEffect, useState } from "react";
import axios from "axios";
import TaskInfoCard from "./(components)/TaskInfoCard";
import WideCard from "./(components)/WideCard";

const route = async () => {
  
  const searchParams = useSearchParams();
//   const status = searchParams.get("organizationName")!;
//   const projectId = searchParams.get("projectId")!;
  const tasks = JSON.parse(searchParams.get("tasks")!);
  // const 

  
//   const [data, setData] = useState<any>(null);
//   const [isLoading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     // fetch("/api/organizations")
//     //   .then((res) => res.json())
//     //   .then((data) => {
//     //     setData(data);
//     //     setLoading(false);
//     //   });
//     axios
//       .post("/api/projects/getDetailsById", {projectId})
//       // .then((res) => res.data)
//       .then((res) => {
//         setData(res.data);
//         setLoading(false);
//       });
//   }, []);

//   if (isLoading) return <div>Loading...</div>;
//   if (!data) return <p>No profile data</p>;
  

  return (
    <Layout>
      
      <div>
        {tasks.map((data: any) =>{
          return <WideCard data={data}/>
        })}
      </div>

    </Layout>
  )
}

export default route