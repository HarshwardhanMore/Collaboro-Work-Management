import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import WideCard from "./WideCard";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const ExploreAllEmployees = ({ img, title, organizationName, OrganizationPerson}: {
  img: string;
  title: string;
  organizationName: string;
  OrganizationPerson: any;
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
          pathname: "/dashboard/organization/main/employees",
          query: {
            organizationName: organizationName,
            // data: data
            OrganizationPerson: JSON.stringify(OrganizationPerson)

            // organization id pass karo and usase sab fetch karo 
          }
        }}>
          <Button className="w-full mb-1.5 bg-blue hover:bg-blue" color="blue">
            <span className="mr-2">Explore</span><OpenInNewIcon fontSize="small"/>
          </Button> 
        </Link>
        <Link href="">
          <Button className="w-full" variant="outline">Invite</Button>
        </Link>
      </div>
    </div>
  );
};

export default ExploreAllEmployees;
