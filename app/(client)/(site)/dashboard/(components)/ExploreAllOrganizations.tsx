import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const ExploreAllOrganizations = ({href1, btnTitle}: 
    {
        href1: string;
        btnTitle: string;
    }) => {
  return (
    <div className=' w-full h-full flex items-center justify-center relative rounded-xl shadow-sm border overflow-hidden'>
        <video src="/videos/organizationBg.mp4" autoPlay muted loop className=" w-full h-full z-0 bg-cover">
        </video>
        <div className=' w-full h-full z-10 absolute top-0 flex justify-center bg-black opacity-50'>
        </div>
        {/* <div className="w-10/12 aspect-video z-20 absolute flex justify-start items-center text-4xl font-extrabold text-white">
            Explore Organizations
        </div> */}
        <div className="w-10/12 aspect-video z-20 bg-transparent absolute flex justify-center items-center">
            <span className='text-4xl font-extrabold text-white'>Explore Organizations</span>
            <Button className="w-1/3 bg-transparent text-white font-bold hover:bg-transparent hover:border-transparent shadow-4xl shadow-black hover:tracking-wider transition-all duration-300">
                <Link href={href1} className=' w-full h-full flex items-center justify-center'>
                    <span className=' mr-2'>{btnTitle}</span> <OpenInNewIcon/>
                </Link>
            </Button> 
        </div>
    </div>
  )
}

export default ExploreAllOrganizations