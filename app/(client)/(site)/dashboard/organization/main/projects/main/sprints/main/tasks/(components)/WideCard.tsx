import React from "react";
import Link from "next/link";

import MoreVertIcon from "@mui/icons-material/MoreVert";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
// import { Badge } from "@/components/ui/badge"


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import BusinessIcon from "@mui/icons-material/Business";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import AssignmentIcon from "@mui/icons-material/Assignment";

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import FlagIcon from '@mui/icons-material/Flag';
import TourIcon from '@mui/icons-material/Tour';

const WideCard = ({data}: any) => {
  return (
    <div className="w-full h-full px-5 py-3 rounded-lg shadow-sm border">
      <div className=" w-full h-full flex justify-between items-center">
        <div className=" w-1/4 flex items-center">
          <Avatar className="h-3/5 aspect-square">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>P</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-row items-center w-1/2 h-full">
          <span>{data?.name}</span>
          <Separator
            orientation="vertical"
            className=" mx-4 bg-gray-500 h-1/2"
          />

          {/* <div className=" h-full w-[2px] border-r"></div> */}
          <span className=" text-sm text-gray-500">
            {data?.description?.length >= 40 ? data?.description.slice(0, 40) : data?.description}
            {data?.description?.length >= 40 && <> ...</>}
          </span>
        </div>
        <div className="w-1/4 h-full flex flex-row items-center justify-between">
          <div className="w-1/2 h-full flex items-center">
            <span className=" mr-2">
                {data?.isComplete ? <CheckCircleIcon style={{fill: "#0f9d58"}}/> : <CancelIcon  style={{fill: "#db4437"}}/>}
              </span>
              <span>
                {data?.priority === "red" && <TourIcon style={{fill: "#db4437"}}/>}
                {data?.priority === "yellow" && <TourIcon style={{fill: "#f4b400"}}/>}
                {data?.priority === "green" && <TourIcon style={{fill: "#0f9d58"}}/>}
              </span>  
          </div>
          <div className="w-1/2"></div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MoreVertIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" bg-white">
              <DropdownMenuLabel>Options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link
                  href={{
                    pathname: `/dashboard/organization/main/projects/main/sprints/main/tasks/main`,
                    query: {
                      // status: status,
                      data: JSON.stringify(data),
                    },
                  }}
                  className=" w-full h-full"
                >
                  Open
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default WideCard;
