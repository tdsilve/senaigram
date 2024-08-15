"use client";
import {
  RiHomeFill,
  RiHomeLine,
  RiSearchLine,
  RiSearchFill,
  RiFilmLine,
  RiFilmFill,
  RiChat3Fill,
  RiChat3Line,
  RiHeartLine,
  RiHeartFill,
  RiAddBoxFill,
  RiAddBoxLine,
} from "react-icons/ri";
import { Tooltip } from "@mui/material";
import { useIsPathnameActive } from "@/hooks/useIsPathnameActive";
import Link from "next/link";
import { UserLoggedButton } from "../../auth/user-logged-btn/UserLoggedButton";
import { Menu } from "./Menu";
import { Home } from "./Home";
// todo improve code
const items = [
  {
    id: 0,
    icon: <RiHomeLine />,
    activeIcon: <RiHomeFill />,
    label: "Home",
    route: "/",
    showSmallScreen: true,
  },
  {
    id: 1,
    icon: <RiSearchLine />,
    activeIcon: <RiSearchFill />,
    label: "Busca",
    route: "/search",
    showSmallScreen: false,
  },
  {
    id: 2,
    icon: <RiFilmLine />,
    activeIcon: <RiFilmFill />,
    label: "Reels",
    route: "/reels",
    showSmallScreen: true,
  },
  {
    id: 3,
    icon: <RiHeartLine />,
    activeIcon: <RiHeartFill />,
    label: "Likes",
    route: "/likes",
    showSmallScreen: false,
  },
  {
    id: 4,
    icon: <RiChat3Line />,
    activeIcon: <RiChat3Fill />,
    label: "Messages",
    route: "/messages",
    showSmallScreen: true,
  },
  {
    id: 5,
    icon: <RiAddBoxLine />,
    activeIcon: <RiAddBoxFill />,
    label: "Create",
    route: undefined,
    showSmallScreen: true,
  },
];

const HeaderLargeScreen = () => {
  const { isActive } = useIsPathnameActive();
  return (
    <div className="h-screen flex flex-col gap-4 items-center header-shadow w-[50px] pt-4">
      <Home />
      {items?.map(({ icon, label, route, activeIcon, id }) => {
        const content = route && isActive(route) ? activeIcon : icon;
        return (
          <Tooltip title={label} arrow placement="right" key={id}>
            <Link href={route ?? "/"} className="text-2xl cursor-pointer">
              {content}
            </Link>
          </Tooltip>
        );
      })}
      <UserLoggedButton />
      <div className="mt-auto pb-4">
        <Menu />
      </div>
    </div>
  );
};

const HeaderSmallerScreen = () => {
  const { isActive } = useIsPathnameActive();
  const headerItems = items.filter((item) => item.showSmallScreen);
  return (
    <div className="flex gap-4 items-center justify-evenly fixed bottom-0 z-40 w-full p-3 header-shadow h-[55px]">
      {headerItems?.map(({ icon, label, route, activeIcon, id }) => {
        const content = route && isActive(route) ? activeIcon : icon;
        return (
          <Tooltip title={label} arrow placement="top" key={id}>
            <Link href={route ?? "/"} className="text-2xl cursor-pointer pb-2">
              {content}
            </Link>
          </Tooltip>
        );
      })}
      <UserLoggedButton />
    </div>
  );
};

export const Header = () => {
  return (
    <>
      <div className="lg:block hidden">
        <HeaderLargeScreen />
      </div>
      <div className="lg:hidden block shadow-lg">
        <HeaderSmallerScreen />
      </div>
    </>
  );
};
