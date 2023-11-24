"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import RefreshIcon from "@mui/icons-material/Refresh";

import { useSearchParams } from "next/navigation";

// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: "All Organizations",
//     href: "/docs/primitives/alert-dialog",
//     description:
//       "A modal dialog that interrupts the user with important content and expects a response.",
//   },
//   {
//     title: "Create Organization",
//     href: "/docs/primitives/hover-card",
//     description:
//       "For sighted users to preview content available behind a link.",
//   },
//   // {
//   //   title: "Organization Performance",
//   //   href: "/docs/primitives/progress",
//   //   description:
//   //     "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//   // },
//   // {
//   //   title: "Scroll-area",
//   //   href: "/docs/primitives/scroll-area",
//   //   description: "Visually or semantically separates content.",
//   // },
//   // {
//   //   title: "Tabs",
//   //   href: "/docs/primitives/tabs",
//   //   description:
//   //     "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//   // },
//   // {
//   //   title: "Tooltip",
//   //   href: "/docs/primitives/tooltip",
//   //   description:
//   //     "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
//   // },
// ];

export default function Navigation({ NavComponents }: any) {
    
  const searchParams = useSearchParams();  
  const organizationId = searchParams.get("organizationId")!;
  const organizationName = searchParams.get("organizationName")!;
  const data = JSON.parse(searchParams.get("organizationName")!);
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent className=" bg-white">
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      {organizationName} | <span></span>
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    {/* {data.description} */}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>

              <ListItem href="" title="Create Project">
                Start a New Project Under {organizationName}.
              </ListItem>
              <ListItem href="" title="Make Team">
                Make a New Team For {organizationName}.
              </ListItem>
              <ListItem href="" title="Add Employee">
                Add New Employee In {organizationName}.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <span className=" flex flex-row items-center border-2 rounded">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Workforce</NavigationMenuTrigger>
          <NavigationMenuContent className=" bg-white">
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              {/* <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      {organizationName} | <span></span>
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    {data.description}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li> */}

              <ListItem href="" title="Teams">
                Explore All The Teams Under {organizationName}.
              </ListItem>
              <Link href="">
                <ListItem href="" title="Employees">
                  Explore All The Employees Under {organizationName}.
                </ListItem>
              </Link>
              {/* <ListItem href="/dashboard/organization/main/employees" title="Employees">
                Explore All The Employees Under {organizationName}.
              </ListItem> */}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Activities</NavigationMenuTrigger>
          <NavigationMenuContent className=" bg-white">
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              {/* <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      {organizationName} | <span></span>
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    {data.description}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li> */}

              <ListItem href="" title="Projects">
                Explore All The Projects Under {organizationName}.
              </ListItem>
              <ListItem href="" title="Sprints">
                Explore All The Sprints Under {organizationName}.
              </ListItem>
              <ListItem href="" title="Tasks">
                Explore All The Tasks Under {organizationName}.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        </span>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Charts</NavigationMenuTrigger>
          <NavigationMenuContent className=" bg-white">
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="" title={`${organizationName}`}>
                Explore Performance of {organizationName}.
              </ListItem>
              <ListItem href="" title="Projects">
                Explore Performance of Projects.
              </ListItem>
              <ListItem href="" title="Sprints">
                Explore Performance of Sprints.
              </ListItem>
              <ListItem href="" title="Tasks">
                Explore Performance of Tasks.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>Activities</NavigationMenuTrigger>
          <NavigationMenuContent className=" bg-white">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {NavComponents?.map((i: any) => (
                <Link href={i.href}>
                  <ListItem
                    key={i.title}
                    title={i.title}
                    href={i.href}
                  ></ListItem>
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          {/* <Link legacyBehavior passHref> */}
          <NavigationMenuLink
            // onClick={() => location.reload()}
            className={`${navigationMenuTriggerStyle()} cursor-pointer`}
          >
            <RefreshIcon className=" h-2/3" />
            Refresh
          </NavigationMenuLink>
          {/* </Link> */}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
