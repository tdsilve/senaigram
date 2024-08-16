
import { useIsPathnameActive } from "@/hooks/useIsPathnameActive";
import { UserLoggedButton } from "@/components/auth/user-logged-btn/UserLoggedButton";
import { HeaderProps } from "./Header";
import { Home } from "@/components/main/header/Home";
import { Menu } from "@/components/main/header/Menu";
import { HeaderItem } from "./HeaderItem";

export const HeaderLargeScreen = ({ routes }: HeaderProps) => {
  const { isActive } = useIsPathnameActive();
  return (
    <div className="h-full flex flex-col gap-4 items-center header-shadow w-[60px] pt-4 border">
      <Home />
      {routes?.map(({ icon, label, route, activeIcon, id }) => {
        const content = route && isActive(route) ? activeIcon : icon;
        return (
          <HeaderItem key={id} label = { label } route = { route }  content = { content } placement="right"/>
        );
      })}
      <UserLoggedButton />
      <div className="mt-auto pb-4">
        <Menu />
      </div>
    </div>
  );
};
