"use client";

import { useState } from "react";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";
import BusinessIcon from "@mui/icons-material/Business";
import DescriptionIcon from "@mui/icons-material/Description";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import OrganizationLayout from "@/components/custom/layouts/organization";

const page = () => {
  const { toast } = useToast();
  const { userId } = useAuth();

  const [data2, setData2] = useState({
    name: "",
    description: "",
    userId: userId,
  });

  const sendData2 = async (e: any) => {
    e.preventDefault();
    axios
      .post("/api/organizations/create", data2)
      .then(() =>
        toast({
          title: "Success!",
          description: "Organization Created!",
        })
      )
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
        <form
          onSubmit={sendData2}
          className=" w-full h-full flex justify-center"
        >
          <div className=" h-full flex flex-col items-start py-4 w-3/5 ">
            <div className=" flex w-full my-4">
              <BusinessIcon />
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name of Organization"
                required
                value={data2.name}
                onChange={(e) => setData2({ ...data2, name: e.target.value })}
                className=" w-full ml-1 px-2 py-2 text-sm  border-b-2 outline-none ring-0 focus:border-black transition-all mr-2"
              />
            </div>
            <div className=" flex w-full">
              <DescriptionIcon />
              <textarea
                id="description"
                name="description"
                // type="text"
                placeholder="Description"
                required
                value={data2.description}
                onChange={(e) =>
                  setData2({ ...data2, description: e.target.value })
                }
                className=" w-full ml-1 px-2 py-2 text-sm  border-b-2 outline-none ring-0 focus:border-black transition-all mr-2"
              />
            </div>
            {/* <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="creator_id" className="text-right">
              creator_id
            </label>
            <input
              id="creator_id"
              name="creator_id"
              required
              value={data.creator_id}
              onChange={(e) => setData({ ...data, creator_id: e.target.value })}
              className="col-span-3"
            />
          </div> */}
            <Button
              type="submit"
              variant="default"
              className=" bg-black text-white self-end my-4"
            >
              Create
            </Button>
          </div>
        </form>
      </div>
    </OrganizationLayout>
  );
};

export default page;
