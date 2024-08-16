
import { useIsPathnameActive } from "@/hooks/useIsPathnameActive";
import { HeaderItem } from "./HeaderItem";
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
          <HeaderItem key={id} label = { label } route = { route }  content = { content } placement="top"/>
        );
      })}
      <UserLoggedButton />
    </div>
  );
};
