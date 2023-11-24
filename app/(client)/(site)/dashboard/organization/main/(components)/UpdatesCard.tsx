import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import WideCard from "./WideCard";

const UpdatesCard = ({ img, title, href1, href2 }: {
  img: string;
  title: string;
  href1: string;
  href2: string;
}) => {
  return (
    <div className="w-full h-full flex items-center px-7 py-4 rounded-xl shadow-sm border">
      <div className="h-full w-5/6 flex flex-row items-center">
        <img src={`/vectors/${img}.png`} alt="Img" className=" block h-full" />
        <div className=" px-8 h-full w-full flex flex-col">
          <div>{title}</div>
          {/* <div className="w-full h-full grid grid-cols-1 my-2 gap-y-1.5">
            <WideCard/>
          </div> */}
          {/* <Link href={href1} className=" text-gray-500 text-sm underline self-end">more</Link> */}
        </div>
      </div>
      <div className="h-full w-1/6 flex flex-col justify-end">
        <Link href="">
          <Button className="w-full" variant="outline">Open</Button>
        </Link>
      </div>
    </div>
  );
};

export default UpdatesCard;
