import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import WideCard from "./WideCard";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const ExploreAllSprintsCard = ({ img, title, data}: {
  img: string;
  title: string;
  data: any;
  // organizationId: string;
  // projectId: string;
}) => {
  console.log("data is OP : ");
  console.log(data);
  return (
    <div className="w-full h-full flex flex-col items-center px-7 py-4 rounded-xl shadow-sm border">
            
      <div className="h-full w-full flex flex-col items-center">
        <div className=" px-8 h-full w-full text-center flex flex-col">
            <div>{title}</div>
        </div>
        <img src={`/vectors/${img}.png`} alt="Img" className=" block h-full" />
      </div>
      <div className="h-full w-full flex flex-col justify-end">
        <Link href={{
          pathname: "/dashboard/organization/main/projects/main/sprints",
          query: {
            organizationId: data.organizationId,
            projectId: data.id,
            projectName: data.name,
            sprints: JSON.stringify(data.sprints)
          }
        }}>
          <Button className="w-full mb-1.5 bg-blue hover:bg-blue" color="blue">
            <span className="mr-2">Explore</span><OpenInNewIcon fontSize="small"/>
          </Button>
        </Link>
        <Link href={{
          pathname: "/dashboard/organization/main/projects/main/sprints/create",
          query: {
            organizationId: data?.organizationId,
            projectId: data?.id
          }
        }}>
          <Button className="w-full" variant="outline">Create</Button>
        </Link>
      </div>
    </div>
  );
};

export default ExploreAllSprintsCard;
