import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import WideCard from "./WideCard";

const InformationCard = ({ img, title, data }: {
  img: string;
  title: string;
  data: any;
}) => {

  console.log(data);
  return (
    <div className="w-full h-full flex items-center">
      <div className="h-full w-5/6 flex flex-row items-center">
        {/* <img src={`/vectors/${img}.png`} alt="Img" className=" block h-full" /> */}
        <div className=" w-2/3 px-8 h-full flex flex-col">
          <div className=" text-3xl">{data.name}</div>
          <div className=" text-sm text-slate-500">{data.description}</div>

          <br />
          
          <div className="">
            <div>
              <span className="text-xl">Task Completion : </span>
              {data.isComplete ? <span className=" text-sm text-slate-500">The Task Has Been Completed!</span> : <span className=" text-sm text-slate-500">The Task is incomplete</span>}
            </div>
            <div>
              <span className="text-xl">Task Activity : </span>
              {!data.active ? <span className=" text-sm text-slate-500">The Task Has Been Deactivated!</span> : <span className=" text-sm text-slate-500">The Task is still Active!</span>}
            </div>
          </div>
          <br />

          {data.startDate && <div>
            <span className="text-xl">Initiation Date : </span>
            <span>{data.startDate}</span>
          </div>}
          
          {data.dueDate && <div>
            <span className="text-xl">Due Date : </span>
            <span>{data.dueDate}</span>
          </div>}
          
        </div>
      </div>
      {/* <div className="h-full w-1/6 flex flex-col justify-end">
        <Link href="">
          <Button className="w-full" variant="outline">Open</Button>
        </Link>
      </div> */}
    </div>
  );
};

export default InformationCard;
