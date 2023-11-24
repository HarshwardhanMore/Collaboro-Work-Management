import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import WideCard from "./WideCard";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import React, { useState, useEffect } from 'react';


const SprintInfoCard = ({ img, title, data}: {
  img: string;
  title: string;
  data: any;
}) => {
  return (
    // <div className="w-full h-full flex items-center px-7 py-4 rounded-xl shadow-sm border">
    //   <div className="h-full w-5/6 flex flex-row items-center">
    //     <img src={`/vectors/${img}.png`} alt="Img" className=" block h-full" />
    //     <div className=" px-8 h-full w-full flex flex-col">
    //       <div>{title}</div>
    //     </div>
    //   </div>
    //   <div className="h-full w-1/6 flex flex-col justify-end">
    //     <Link href="">
    //       <Button className="w-full" variant="outline">Explore</Button>
    //     </Link>
    //   </div>
    // </div>
    <div className=' w-full h-full flex items-center justify-center relative rounded-xl shadow-sm border overflow-hidden'>
        {/* <video src="/videos/organizationBg.mp4" autoPlay muted loop className=" w-full h-full z-0 bg-cover">
        </video> */}
        <img src="/images/hero2.jpg" alt="" className=" h-full"/>
        <div className=' w-full h-full z-10 absolute top-0 flex justify-center bg-black opacity-50'>
        </div>
        {/* <div className="w-10/12 aspect-video z-20 absolute flex justify-start items-center text-4xl font-extrabold text-white">
            Explore Organizations
        </div> */}
        <div className="w-10/12 aspect-video z-20 bg-transparent absolute flex justify-center items-center">
            <span className='text-4xl font-extrabold text-white'>Explore {data.name}</span>
            <Button className="w-1/3 bg-transparent text-white font-bold hover:bg-transparent hover:border-transparent shadow-4xl shadow-black hover:tracking-wider transition-all duration-300">
                <Link href="" className=' w-full h-full flex items-center justify-center'>
                    <span className=' mr-2'>Explore</span> <OpenInNewIcon/>
                </Link>
            </Button> 
        </div>
    </div>
  );
};

export default SprintInfoCard;
