"use client";

import Layout from './(components)/layout';


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
  const [join, setJoin] = useState(false);

  const searchParams = useSearchParams();
  const data = JSON.parse(searchParams.get("data")!);

  // const data2 = {userId, data.id};

  // const id = data.id;

  // console.log({userId, id});

  // const sendData = async () => {
  //   axios
  //     .post("/api/teams/join", { userId, id })
  //     .then(() => {
  //       toast({
  //         title: "Success!",
  //         description: `Now You are a part of ${data.name} Team!`,
  //       });
  //       setJoin(true);
  //     })
  //     .catch((e) =>
  //       toast({
  //         title: "Uh oh! Something went wrong.",
  //         description: "There was a problem with your request."+e,
  //       })
  //     );
  // }; // Add a semicolon here

  const [data2, setData2] = useState({
    userId: userId,
    teamId: data.id,
  });

  const sendData2 = async (e: any) => {
    e.preventDefault();
    console.log("Calling");
    const data= await axios.post("/api/teams/join",data2);
    if(data.status === 200){
      console.log("Success");
    } else {
      console.log("Error");
    }
    // await axios
    //   .post("/api/teams/join", data2)
    //   .then(() =>
    //     toast({
    //       title: "Success!",
    //       description: "Team Joined!",
    //     })
    //   )
    //   .catch((e) =>
    //     toast({
    //       title: "Uh oh! Something went wrong.",
    //       description: "There was a problem with your request."+e,
    //     })
    //   );



  };
  

  return (
    <Layout>
      <div className=" w-full h-full grid grid-cols-2">
        <div className=" w-full h-full flex items-center">
          <img src="/image.jpg" alt="Image" className=" w-full" />
        </div>
        <div className=" w-full h-full flex justify-center">
          <div className=" h-full flex flex-col items-start py-4 w-3/5 ">
            <div className=" flex items-center w-full my-4">
              <BusinessIcon />
              <div className="w-full ml-1 px-2 py-2 text-sm   outline-none ring-0 focus:border-black transition-all mr-2">
                {data.name ? data.name : <>Name of Team</>}
              </div>
            </div>
            <div className=" flex items-center w-full my-4">
              <BusinessIcon />
              <div className="w-full ml-1 px-2 py-2 text-sm   outline-none ring-0 focus:border-black transition-all mr-2">
                {data.description ? data.description : <>Description of Organization</>}
              </div>
            </div>
            {/* <div className=" flex items-center w-full my-4">
              <BusinessIcon />
              <div className="w-full ml-1 px-2 py-2 text-sm   outline-none ring-0 focus:border-black transition-all mr-2">
                {data.createdAt ? date : <>Date of Creation of Organization</>}
              </div>
            </div> */}
            {/* {isJoin === "true" && ( */}
            <form onSubmit={sendData2}>

              <Button
                type="submit"
                variant="default"
                className=" bg-black text-white self-end my-4"
                // onClick={sendData2}
                >
                {join ? <>Joined</> : <>Join</>}
              </Button>
            </form>
            {/* )} */}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default page