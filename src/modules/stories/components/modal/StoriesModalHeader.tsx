import React from "react";
import { LogoFull } from "@/components/logo/LogoFull";
import { RiCloseLine } from "react-icons/ri";

export const StoriesModalHeader = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="w-full flex justify-between py-2 px-4 ">
      <LogoFull />
      <button onClick={onClick} className="text-white text-3xl">
        <RiCloseLine />
      </button>
    </div>
  );
};
