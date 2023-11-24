"use client";

import {
  MoreVertical,
  ChevronLast,
  ChevronFirst,
  LayoutDashboard,
  Building2,
  FolderGit2,
  KanbanSquare,
  CheckCircle,
  BellRing,
  MessageSquare,
  BrainCog,
  Menu,
  UserCog,
} from "lucide-react";
import { useContext, createContext, useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { AlertDialogComponent } from "./AlertDialogComponent";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useClerk } from "@clerk/clerk-react";
import { useUser, SignOutButton } from "@clerk/nextjs";

interface SidebarContextProps {
  expanded: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

const dashboardList = [];

export default function Sidebar({ data }: any) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const { signOut } = useClerk();
  const { user } = useUser();

  console.log(user?.emailAddresses[0].emailAddress);

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-xl rounded-r-2xl">
        <div className=" h-[12%] w-full p-4 flex justify-between items-center mb-2">
          <div className=" w-full flex justify-start items-center">
            <img
              src="/logo-main.png"
              className={`overflow-hidden transition-all ${
                expanded ? " w-48" : "w-0"
              }`}
              alt=""
            />
          </div>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {/* {expanded ? <ChevronFirst /> : <ChevronLast />} */}

            <Menu />
          </button>
        </div>

        <div className=" h-[100%] ">
          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">
              <SidebarItem
                icon={<LayoutDashboard size={20} />}
                text="Dashboard"
                active
                href="/dashboard"
              />
              <hr className=" my-3" />

              {/* <SidebarItem
                icon={<Building2 size={20} />}
                text="Organizations"
              />
              <SidebarItem
                icon={<FolderGit2 size={20} />}
                text="Projects"
              />
              <SidebarItem
                icon={<KanbanSquare size={20} />}
                text="Sprints"
              />
              <SidebarItem
                icon={<CheckCircle size={20} />}
                text="Tasks"
              /> */}

              {data.map((i) => {
                return (
                  <SidebarItem icon={i.icon} text={i.title} href={i.href} />
                );
              })}

              <hr className=" my-3" />
              <SidebarItem
                icon={<BellRing size={20} />}
                text="Notifications"
                alert
              />
              <SidebarItem
                icon={<MessageSquare size={20} />}
                text="Chats"
                alert
              />
              <SidebarItem
                icon={<BrainCog size={20} />}
                text="ChatBot"
                // alert
              />
            </ul>
          </SidebarContext.Provider>
        </div>

        <div className=" h-auto border-t flex items-center p-3">
          <Avatar>
            <AvatarImage
              src={user ? user.imageUrl : "https://github.com/shadcn.png"}
              alt="P"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div
            className={`
              flex justify-between  items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">
                {user ? user.fullName : <>Name</>}
              </h4>
              <span className="text-xs text-gray-600">
                {user ? user.emailAddresses[0].emailAddress : <>Email</>}
              </span>
            </div>
            {/* <MoreVertical size={20} /> */}
            <DropdownMenu>
              <DropdownMenuTrigger>
                <UserCog size={20} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel className=" cursor-pointer">
                  My Account
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href="/user-profile">
                  <DropdownMenuItem className=" cursor-pointer">
                    <AccountCircleOutlinedIcon fontSize="small" />
                    <span className="ml-1"> Profile</span>
                  </DropdownMenuItem>
                </Link>
                {/* <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem> */}
                <DropdownMenuItem className=" cursor-pointer">
                  <CurrencyRupeeOutlinedIcon fontSize="small" />
                  <span className="ml-1">Subscription</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className=" cursor-pointer"
                  onClick={() => signOut()}
                >
                  <LogoutOutlinedIcon fontSize="small" />
                  <span className="ml-1"> Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
              {/* <UserButton afterSignOutUrl="/" />{" "} */}
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({
  icon,
  text,
  active,
  alert,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  active: boolean;
  alert: boolean;
  href: string;
}) {
  const { expanded } = useContext(SidebarContext);

  return (
    <Link href={`${href}`}>
      <li
        className={`
        relative flex items-center p-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-[#4285F4] text-white"
            : "hover:bg-blue-100 text-slate-800"
        }
    `}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all text-sm ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-[#4285F4] ${
              expanded ? "" : "top-2"
            }`}
          />
        )}

        {!expanded && (
          <div
            className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-blue text-white text-sm 
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
          >
            {text}
          </div>
        )}
      </li>
    </Link>
  );
}
