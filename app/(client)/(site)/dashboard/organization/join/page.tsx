"use client";

import { useState } from "react";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";
import BusinessIcon from "@mui/icons-material/Business";
import DescriptionIcon from "@mui/icons-material/Description";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";
import OrganizationLayout from "@/components/custom/layouts/organization";

const page = () => {
  const { toast } = useToast();
  const { userId } = useAuth();
  const searchParams = useSearchParams();
  const [join, setJoin] = useState(false);

  const id = searchParams.get("id");
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const date = searchParams.get("date");
  const isJoin = searchParams.get("isJoin");
  console.log("isJoin : " + isJoin);
  console.log("isJoin : " + typeof isJoin);

  const [data, setData] = useState({
    userId: userId,
    organizationId: id,
  });

  const sendData = async () => {
    axios
      .post("/api/organizations/join", data)
      .then(() => {
        toast({
          title: "Success!",
          description: `Now You are a part of ${title} Organization!`,
        });
        setJoin(true);
      })
      .catch(() =>
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        })
      );
  };

  return (
    <OrganizationLayout>
      <div className=" w-full h-full grid grid-cols-2">
        <div className=" w-full h-full flex items-center">
          <img src="/image.jpg" alt="Image" className=" w-full" />
        </div>
        <div className=" w-full h-full flex justify-center">
          <div className=" h-full flex flex-col items-start py-4 w-3/5 ">
            <div className=" flex items-center w-full my-4">
              <BusinessIcon />
              <div className="w-full ml-1 px-2 py-2 text-sm   outline-none ring-0 focus:border-black transition-all mr-2">
                {title ? title : <>Name of Organization</>}
              </div>
            </div>
            <div className=" flex items-center w-full my-4">
              <BusinessIcon />
              <div className="w-full ml-1 px-2 py-2 text-sm   outline-none ring-0 focus:border-black transition-all mr-2">
                {description ? description : <>Description of Organization</>}
              </div>
            </div>
            <div className=" flex items-center w-full my-4">
              <BusinessIcon />
              <div className="w-full ml-1 px-2 py-2 text-sm   outline-none ring-0 focus:border-black transition-all mr-2">
                {date ? date : <>Date of Creation of Organization</>}
              </div>
            </div>
            {isJoin === "true" && (
              <Button
                type="submit"
                variant="default"
                className=" bg-black text-white self-end my-4"
                onClick={() => {
                  sendData();
                }}
              >
                {join ? <>Joined</> : <>Join</>}
              </Button>
            )}
          </div>
        </div>
      </div>
    </OrganizationLayout>
  );
};

export default page;
