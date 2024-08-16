import { Tooltip } from "@mui/material";
import { useIsPathnameActive } from "@/hooks/useIsPathnameActive";
import Link from "next/link";
import { UserLoggedButton } from "@/components/auth/user-logged-btn/UserLoggedButton";

import { HeaderProps } from "./Header";
export const HeaderSmallScreen = ({ routes }: HeaderProps) => {
  const { isActive } = useIsPathnameActive();
  const headerItems = routes.filter((item) => item.showSmallScreen);
  return (
    <div className="flex gap-4 items-center justify-evenly fixed bottom-0 z-40 w-full header-shadow h-[50px] bg-white">
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
