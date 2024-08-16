"use client";

import { routes } from "@/constants/routes";
import { HeaderSmallScreen } from "./HeaderSmallScreen";
import { HeaderLargeScreen } from "./HeaderLargeScreen";

export type HeaderProps = {
  routes: {
    id: number;
    icon: React.ReactNode;
    activeIcon: React.ReactNode;
    label: string;
    route?: string;
    showSmallScreen: boolean;
  }[];
};

export const Header = () => {
  return (
    <>
      <div className="lg:block hidden ">
        <HeaderLargeScreen routes={routes} />
      </div>
      <div className="lg:hidden block shadow-lg relative z-20">
        <HeaderSmallScreen routes={routes} />
      </div>
    </>
  );
};
