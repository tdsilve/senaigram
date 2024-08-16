import { Tooltip } from "@mui/material";
import { useIsPathnameActive } from "@/hooks/useIsPathnameActive";
import Link from "next/link";
import { UserLoggedButton } from "@/components/auth/user-logged-btn/UserLoggedButton";
import { HeaderProps } from "./Header";
import {Home} from "@/components/main/header/Home";
import {Menu} from "@/components/main/header/Menu";

export const HeaderLargeScreen = ({routes }:HeaderProps) => {
    const { isActive } = useIsPathnameActive();
    return (
      <div className="h-full flex flex-col gap-4 items-center header-shadow w-[60px] pt-4 border">
        <Home />
        {routes?.map(({ icon, label, route, activeIcon, id }) => {
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