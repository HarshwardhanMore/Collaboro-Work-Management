import {
  MoreVertical,
  ChevronLast,
  ChevronFirst,
  LayoutDashboard,
  Building2,
  Briefcase,
  FolderGit2,
  KanbanSquare,
  CheckCircle,
  BellRing,
  MessageSquare,
  BrainCog,
  Menu,
  UserCog,
} from "lucide-react";
import MovingIcon from "@mui/icons-material/Moving";

import React from "react";

export const SidebarComponents: {
  title: string;
  href: string;
  icon: any;
}[] = [
  {
    title: "Organizations",
    href: "/dashboard/organization",
    icon: <Building2 size={20} />,
  },
  {
    title: "Projects",
    href: "/dashboard/organization/project",
    icon: <FolderGit2 size={20} />,
  },
  {
    title: "Sprints",
    href: "/dashboard/organization/project/sprint",
    icon: <KanbanSquare size={20} />,
  },
  {
    title: "Tasks",
    href: "/dashboard/organization/project/sprint/task",
    icon: <CheckCircle size={20} />,
  },
  {
    title: "Performance",
    href: "/dashboard/organization/performance",
    icon: <MovingIcon fontSize="medium" />,
  },
];
