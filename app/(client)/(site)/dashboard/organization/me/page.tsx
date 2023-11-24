"use client";

import WideCard from "@/components/custom/organization/WideCard";
import { useState, useEffect } from "react";
import LoadingComponent from "@/components/custom/LoadingComponent";
import { AlertDialogComponent } from "@/components/custom/AlertDialogComponent";
import axios from "axios";
import { useAuth } from "@clerk/nextjs";
import OrganizationLayout from "@/components/custom/layouts/organization";
import { Button } from "@/components/ui/button"
import Link from "next/link";

const OrganizationPage = () => {
  // const { isLoaded, isSignedIn, user } = useUser();
  // if (!user) return <LoadingComponent />;

  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const { userId } = useAuth();

  useEffect(() => {
    axios
      .post("/api/organizations/me", { userId })
      // .then((res) => res.data)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <LoadingComponent />;
  if (!data) return <p>No data found</p>;

  return (

    <OrganizationLayout>
      <div className="w-full h-full grid grid-cols-4 gap-x-6">
        <div className="w-full h-max flex flex-col col-span-3">
          <div className=" font-bold text-xl mb-2 text-gray-700">The Organizations you are a part of!</div>
          <div className=" w-full h-full grid grid-cols-1 gap-y-2">
            {data.map((i: any) => {
              if(i.status === "join")
                return (
                  <WideCard
                    id={i.Organization.id}
                    title={i.Organization.name}
                    description={i.Organization.description}
                    date={i.createdAt}
                    status={i.status}
                    data={i.Organization}
                    isJoin={false}
                  />
                );
            })}
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
    </OrganizationLayout>
  );
};

// id={i.Organization.id}
// title={i.Organization.name}
// description={i.Organization.description}
// date={i.createdAt}
// status={i.status}
// data={i.Organization}
// isJoin={false}

export default OrganizationPage;
