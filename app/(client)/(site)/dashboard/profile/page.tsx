"use client";

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { useUser } from "@clerk/nextjs";

import { useEffect, useState } from "react";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";
import BusinessIcon from "@mui/icons-material/Business";
import DescriptionIcon from "@mui/icons-material/Description";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import OrganizationLayout from "@/components/custom/layouts/organization";

import { useRouter } from 'next/navigation';
import Link from 'next/link';

const page = () => {
  const { toast } = useToast();
  const { userId } = useAuth();
  // const { isLoaded, isSignedIn, user } = useUser();

  
  useEffect(() => {
    console.log("Run something")
  }, [])

  const router = useRouter();

  // if (!isLoaded || !isSignedIn) {
  //   return <div className=' w-screen'>You are not logged in. Please <Link href="/sign-in">Sign In</Link> here!</div>;
  // }
  

  // if(!user) return <></>;

  // if(!user) router.push("/sign-in");

  console.log(userId);

  // console.log(user?.firstName);
  // console.log(user?.lastName);

  const [data2, setData2] = useState({
    firstName: "",
    lastName: "",
    primaryEmail: "",
    secondaryEmail: "",
    phoneNumber: "",
    dateOfBirth: null,
    gender: "",
    userId: userId
  });
  

  console.log(data2);

  const sendData2 = async (e: any) => {
    e.preventDefault();
    axios
      .post("/api/profile/create", data2)
      .then(() =>
        toast({
          title: "Success!",
          description: "Profile Created!",
        })
      )
      .catch((e) =>
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request."+e,
        })
      );
  };

  return (
    <>
      <div className=" w-full h-full">
        {/* <div className=" w-full h-full flex items-center">
          <img src="/image.jpg" alt="Image" className=" w-full" />
        </div> */}
        <form
          onSubmit={sendData2}
          className=" w-full h-full flex flex-col justify-center items-center"
        >
            <div className=" h-max w-full mt-8 mb-4 font-extrabold text-4xl text-center">
                Fill Profile
            </div>
          <div className=" h-full flex flex-col items-start py-4 w-5/6 overflow-hidden overflow-y-scroll">
            <div className=" flex w-full my-4">
              <BusinessIcon />
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
                required
                value={data2.firstName}
                onChange={(e) => setData2({ ...data2, firstName: e.target.value })}
                className=" w-full ml-1 px-2 py-2 text-sm  border-b-2 outline-none ring-0 focus:border-black transition-all mr-2"
              />
            </div>
            <div className=" flex w-full my-4">
              <BusinessIcon />
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
                required
                value={data2.lastName}
                onChange={(e) => setData2({ ...data2, lastName: e.target.value })}
                className=" w-full ml-1 px-2 py-2 text-sm  border-b-2 outline-none ring-0 focus:border-black transition-all mr-2"
              />
            </div>
            <div className=" flex w-full my-4">
              <BusinessIcon />
              <input
                id="primaryEmail"
                name="primaryEmail"
                type="text"
                placeholder="Primary Email"
                required
                value={data2.primaryEmail}
                onChange={(e) => setData2({ ...data2, primaryEmail: e.target.value })}
                className=" w-full ml-1 px-2 py-2 text-sm  border-b-2 outline-none ring-0 focus:border-black transition-all mr-2"
              />
            </div>
            <div className=" flex w-full my-4">
              <BusinessIcon />
              <input
                id="secondaryEmail"
                name="secondaryEmail"
                type="text"
                placeholder="Secondary Email (optional)"
                // required
                value={data2.secondaryEmail}
                // disabled
                onChange={(e) => setData2({ ...data2, secondaryEmail: e.target.value })}
                className=" w-full ml-1 px-2 py-2 text-sm  border-b-2 outline-none ring-0 focus:border-black transition-all mr-2"
              />
            </div>            
            <div className=" flex w-full my-4">
              <BusinessIcon />
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                placeholder="Phone Number (optional)"
                // required
                value={data2.phoneNumber}
                // disabled
                onChange={(e) => setData2({ ...data2, phoneNumber: e.target.value })}
                className=" w-full ml-1 px-2 py-2 text-sm  border-b-2 outline-none ring-0 focus:border-black transition-all mr-2"
              />
            </div>
            
            <div className="flex w-full my-4">
              <BusinessIcon />
              <label className=" w-full ml-1 px-2 py-2 text-sm outline-none ring-0 transition-all mr-2">Pick Date of Birth
                <DatePicker
                  id="dateOfBirth"
                  placeholder="Pick Date of Birth"
                  selected={data2.dateOfBirth}
                  onChange={(date:any) => {    
                    setData2({
                        ...data2,
                        dateOfBirth: date,
                    });
                  }}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  className="w-full ml-1 px-2 py-2 text-sm border-b-2 outline-none ring-0 focus:border-black transition-all mr-2"
                />
              </label>
            </div>
            
            <div className=" flex w-full my-4">
              <BusinessIcon />
              <select name="" title="Priority" id="" onChange={(e)=>{setData2({...data2, gender: e.target.value})}} className="w-full ml-1 px-2 py-2 text-sm  border-b-2 outline-none ring-0 focus:border-black transition-all mr-2">
                <option value="" disabled selected>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                {/* <option value="green">green</option> */}
              </select>
            </div>


            
            
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
    </>
  );
};

export default page;
