"use client";
import { usePathname } from "next/navigation";

export const useIsPathnameActive = () => {
  const pathname = usePathname();
  const isActive = (href: string) => {
    return pathname === href;
  };

  return { isActive };
};
