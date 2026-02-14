"use client";

import * as React from "react";
import Link from "next/link";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";

// import { useIsMobile } from "@/hooks/use-mobile"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "../../components/Theme";

const URLs = [
  'home','skills','projects','academics','C&A','contact'
]

export function NavigationMenuDemo() {
  // const isMobile = useIsMobile()

  return (
    <div className="w-full">
      <NavigationMenu className="bg-red-500 w-screen max-h-20 border">
        <NavigationMenuList className="">
          {URLs.map((item, index) => (

          <NavigationMenuItem key={index}>
            <NavigationMenuLink asChild>
              <Link className=" text-xs" href={`${item == 'home' ? '/' : `/${item}`}`}>{item}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          ))}
          
          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
