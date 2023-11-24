"use client";

import WideCard from "@/components/custom/WideCard";
import Navigation from "@/components/custom/Navigation";
import components from "../../../../../components/custom/layouts/components";
import { useState, useEffect } from "react";
import LoadingComponent from "@/components/custom/LoadingComponent";
import { AlertDialogComponent } from "@/components/custom/AlertDialogComponent";
import axios from "axios";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import Layout from "./(components)/layout";

const OrganizationPage = () => {
  // const { isLoaded, isSignedIn, user } = useUser();
  // if (!user) return <LoadingComponent />;

  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get("/api/organizations")
      // .then((res) => res.data)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <LoadingComponent />;
  if (!data) return <p>No profile data</p>;
  
  return (
    <Layout>
      <div className="w-full h-full grid grid-cols-4 gap-x-6">
        <div className="w-full h-max grid grid-cols-1 gap-y-2 col-span-3">
          {data.map((i: any) => {
            return (
              <WideCard
                id={i.id}
                title={i.name}
                description={i.description}
                date={i.createdAt}
                isJoin={true}
              />
            );
          })}
        </div>
        <div className="w-full h-full flex flex-col">
          <div className="w-full mb-6">
            <div className=" text-xl font-bold">Filters</div>
            <div className=" flex flex-row flex-wrap">
              <Button className=" mr-2 mb-2" variant="secondary">Sort by Title</Button>
              <Button className=" mr-2 mb-2" variant="secondary">Sort by Newest to Oldest</Button>
              <Button className=" mr-2 mb-2" variant="secondary">Sort by Oldest to Newest</Button>
              <Button className=" mr-2 mb-2" variant="secondary">Open Source</Button>
              <Button className=" mr-2 mb-2" variant="secondary">Private</Button>
            </div>
          </div>
          <div className="w-full mb-6">
            <div className="text-xl font-bold mb-2">The Organizations you are a part of!</div>
            <Link href="/dashboard/organization/me">
              <Button className="w-full" variant="outline">Click Here</Button>
            </Link>
          </div>
          <div className="w-full mb-6">
            <div className="text-xl font-bold mb-2">See the organization You Own!</div>
            <Link href="/dashboard/organization/me/created">
              <Button className="w-full" variant="outline">Click Here</Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrganizationPage;
