"use client";

import React, { useEffect, useState } from 'react'

import { useSearchParams } from "next/navigation";
import { clerkClient } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Link } from 'lucide-react';
import WideCard from './(components)/WideCard';
import axios from 'axios';
import Layout from './(components)/layout';

const page = async () => {
    
  const searchParams = useSearchParams();
  const organizationName = searchParams.get("organizationName")!;
  const OrganizationPerson = JSON.parse(searchParams.get("OrganizationPerson")!);
  // const data = JSON.parse(searchParams.get("data")!);
  
  // const [data, setData] = useState<any>(null);
  // const [isLoading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   axios
  //     .get("/api/organizations")
  //     // .then((res) => res.data)
  //     .then((res) => {
  //       setData(res.data);
  //       setLoading(false);
  //     });
  // }, []);

  // if (isLoading) return <>Loading...</>;
  // if (!data) return <p>No profile data</p>;
  
  return (
    <Layout>

        
      <div className="w-full h-full grid grid-cols-4 gap-x-6">
        <div className="w-full h-max flex flex-col col-span-3">
          <div className=" font-bold text-xl mb-2 text-gray-700 my-4">Currently {organizationName} Have These Full-Time Employees!</div>
          <div className=" w-full h-full grid grid-cols-1 gap-y-2">     
            {    
              OrganizationPerson.map((data: any) =>{
                return <WideCard data={data.Profile}/>
              })
            }
          </div>
        </div>
        <div className="w-full h-full flex flex-col">
          <div className="w-full mb-6">
            <div className=" text-xl font-bold mb-2">Filters</div>
            <div className=" flex flex-row flex-wrap">
              <Button className=" mr-2 mb-2" variant="secondary">Sort by Title</Button>
              <Button className=" mr-2 mb-2" variant="secondary">Sort by Newest to Oldest</Button>
              <Button className=" mr-2 mb-2" variant="secondary">Sort by Oldest to Newest</Button>
              <Button className=" mr-2 mb-2" variant="secondary">Open Source</Button>
              <Button className=" mr-2 mb-2" variant="secondary">Private</Button>
            </div>
          </div>
          <div className="w-full mb-6">
            <div className="text-xl font-bold mb-2">See the organization You Own!</div>
            <Link href="/dashboard/organization/me/created">
              <Button className="w-full" variant="outline">Click Here</Button>
            </Link>
          </div>
        </div>
      </div>




        
        {/* {employees.map( async (i: any)=>{
            if(i === undefined) return null;
            if(i.userId === undefined) return null;
            const user = await clerkClient.users.getUser(i.userId!);
            console.log(user);
            return <div>
                {i.userId}
            </div>
        })} */}

        {/* {searchParams}
        <br />
        {employees[0].userId}
        <br />
        {} */}
    </Layout>
  )
}

export default page