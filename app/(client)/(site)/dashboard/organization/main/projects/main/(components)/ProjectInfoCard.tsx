import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import WideCard from "./WideCard";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const ProjectInfoCard = ({ img, title, links, timeline, evaluation, resources, explore, data}: {
  img: string;
  title: string;
  links: string;
  timeline: string;
  evaluation: string;
  resources: string;
  explore: string;
  data: any;
}) => {
  return (
    // <div className="w-full h-full flex items-center px-7 py-4 rounded-xl shadow-sm border">
    //   <div className="h-full w-5/6 flex flex-row items-center">
    //     <img src={`/vectors/${img}.png`} alt="Img" className=" block h-full" />
    //     <div className=" px-8 h-full w-full flex flex-col">
    //       <div>Project- {title}</div>
    //       <div className="w-full h-full grid grid-cols-1 my-2 gap-y-1.5">
    //         {/* <WideCard/> */}
    //         {/* <WideCard/> */}
    //       </div>
    //       {/* <Link href="" className=" text-gray-500 text-sm underline self-end">more</Link> */}
    //     </div>
    //   </div>
    //   <div className="h-full w-1/6 flex flex-col justify-end">
    //     <Link href="">
    //       <Button className="w-full" variant="outline">Explore</Button>
    //     </Link>
    //   </div>
    // </div>
    <div className=' w-full h-full flex items-center justify-center relative rounded-xl shadow-sm border overflow-hidden'>
        <video src="/videos/projectMainBg.mp4" autoPlay muted loop className="h-full aspect-video z-0 bg-cover bg-transparent">
        </video>
        <div className=' w-full h-full z-10 absolute top-0 flex justify-center  bg-black bg-opacity-50'>
        </div>
        {/* <div className="w-10/12 aspect-video z-20 absolute flex justify-start items-center text-4xl font-extrabold text-white">
            Explore Organizations
        </div> */}
        <div className="w-11/12 aspect-video z-20 bg-transparent absolute flex justify-center items-center">
          <div className=" w-5/6 h-full flex items-center">
            <span className='text-4xl font-extrabold text-white'>Explore <span className=" font-extralight">{data?.name}</span></span>
          </div>
          <div className=" w-1/6 h-full flex flex-col justify-end items-end">
            <Button className=" w-max mb-4 bg-transparent text-white font-bold hover:bg-transparent hover:border-transparent shadow-4xl shadow-black hover:tracking-wider transition-all duration-300">
                <Link href="" className=' w-full h-full flex items-center justify-center'>
                    <span className=' mr-2'>Links</span> <OpenInNewIcon/>
                </Link>
            </Button> 
            <Button className=" w-max mb-4 bg-transparent text-white font-bold hover:bg-transparent hover:border-transparent shadow-4xl shadow-black hover:tracking-wider transition-all duration-300">
                <Link href="" className=' w-full h-full flex items-center justify-center'>
                    <span className=' mr-2'>Documenations</span> <OpenInNewIcon/>
                </Link>
            </Button> 
            <Button className=" w-max mb-4 bg-transparent text-white font-bold hover:bg-transparent hover:border-transparent shadow-4xl shadow-black hover:tracking-wider transition-all duration-300">
                <Link href="" className=' w-full h-full flex items-center justify-center'>
                    <span className=' mr-2'>Evaluation</span> <OpenInNewIcon/>
                </Link>
            </Button>
            <Button className=" w-max mb-4 bg-transparent text-white font-bold hover:bg-transparent hover:border-transparent shadow-4xl shadow-black hover:tracking-wider transition-all duration-300">
                <Link href="" className=' w-full h-full flex items-center justify-center'>
                    <span className=' mr-2'>Budjet</span> <OpenInNewIcon/>
                </Link>
            </Button> 
            <Button className=" w-max mb-4 bg-transparent text-white font-bold hover:bg-transparent hover:border-transparent shadow-4xl shadow-black hover:tracking-wider transition-all duration-300">
                <Link href="" className=' w-full h-full flex items-center justify-center'>
                    <span className=' mr-2'>Explore</span> <OpenInNewIcon/>
                </Link>
            </Button> 
          </div>
        </div>
    </div>
  );
};

export default ProjectInfoCard;
