import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const ExploreMoreCard = ({ img, title, href1, btnTitle }: {
  img: string;
  title: string;
  href1: string;
  btnTitle: string;
}) => {
  return (
    <div className="w-full h-full flex items-center px-7 py-4 rounded-xl shadow-sm border">
      <div className="h-full w-full flex flex-col items-center">
        <div className="h-full w-full flex flex-row items-center">
            <div className="h-full w-full flex flex-col">
                <div>{title}</div>
            </div>
        </div>
        <div className="h-full w-full flex flex-col justify-end">
            <Link href={href1}>
                <Button className="w-full mb-1.5 bg-blue hover:bg-blue hover:tracking-wider transition-all duration-300" color="blue">
                    <span className=" mr-2">{btnTitle}</span> <OpenInNewIcon fontSize="small"/>
                </Button> 
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreMoreCard;
