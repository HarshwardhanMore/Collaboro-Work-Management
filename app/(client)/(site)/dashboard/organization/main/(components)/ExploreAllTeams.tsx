import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import WideCard from "./WideCard";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const ExploreAllTeams = ({ img, title, data }: {
  img: string;
  title: string;
  data: any;
}) => {
  return (
    <div className="w-full h-full flex items-center px-7 py-4 rounded-xl shadow-sm border">
      <div className="h-full w-3/4 flex flex-row items-center">
        <img src={`/vectors/${img}.png`} alt="Img" className=" block h-full" />
        <div className=" px-8 h-full w-full flex flex-col">
          <div>{title}</div>
          {/* <div className="w-full h-full grid grid-cols-1 my-2 gap-y-1.5">
            <WideCard/>
          </div>
          <Link href={href1} className=" text-gray-500 text-sm underline self-end">more</Link> */}
        </div>
      </div>
      <div className="h-full w-1/4 flex flex-col justify-end">
      <Link href={{
          pathname: "/dashboard/organization/main/teams",
          query: {
            organizationId: data.id,
            organizationName: data.name,
            teams: JSON.stringify(data.teams)
          }
        }}>
          <Button className="w-full mb-1.5 bg-blue hover:bg-blue" color="blue">
            <span className="mr-2">Explore</span><OpenInNewIcon fontSize="small"/>
          </Button>
        </Link>
        <Link href={{
          pathname: "/dashboard/organization/main/teams/create",
          query: {
            organizationId: data.id
          }
        }}>
          <Button className="w-full" variant="outline">Create</Button>
        </Link>
      </div>
    </div>
  );
};

export default ExploreAllTeams;
