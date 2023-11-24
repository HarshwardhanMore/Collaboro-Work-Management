"use client";

import { useSearchParams } from "next/navigation";
import Layout from "../(components)/layout";
import WideCard from "./(components)/WideCard";
import { Button } from "@/components/ui/button";
import Link from "next/navigation";

const page = () => {
  
  const searchParams = useSearchParams();
  const organizationId = searchParams.get("organizationId")!;
  const projectId = searchParams.get("projectId")!;
  const projectName = searchParams.get("projectName")!;
  // const sprints = searchParams.get("sprints")!;
  const sprints = JSON.parse(searchParams.get("sprints")!);

  return (
    <Layout>

      
      <div className="w-full h-full grid grid-cols-4 gap-x-6">
        <div className="w-full h-max flex flex-col col-span-3">
          <div className=" font-bold text-xl my-4 text-gray-700">Sprints Listed For {projectName}</div>
          
          <div>
            {sprints.map((data: any) =>{
              return <WideCard data={data}/>
            })}
          </div>
        </div>
        <div className="w-full h-full flex flex-col">
          <div className="w-full mb-6">
            <div className=" text-xl font-bold my-4">Filters</div>
            <div className=" flex flex-row flex-wrap">
              <Button className=" mr-2 mb-2" variant="secondary">Sort by Title</Button>
              <Button className=" mr-2 mb-2" variant="secondary">Sort by Newest to Oldest</Button>
              <Button className=" mr-2 mb-2" variant="secondary">Sort by Oldest to Newest</Button>
              <Button className=" mr-2 mb-2" variant="secondary">Open Source</Button>
              <Button className=" mr-2 mb-2" variant="secondary">Private</Button>
            </div>
          </div>
          {/* <div className="w-full mb-6">
            <div className="text-xl font-bold mb-2">See the organization You Own!</div>
            <Link href="/dashboard/organization/me/created">
              <Button className="w-full" variant="outline">Click Here</Button>
            </Link>
          </div> */}
        </div>
      </div>




{/* 
      <div>
        {sprints.map((data: any) =>{
          return <WideCard data={data}/>
        })}
      </div> */}
    </Layout>
  )
}

export default page