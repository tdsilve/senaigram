import React from "react";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { cx } from "@/lib/css";

export const StoriesArrowButton = ({
  isLeft,
  onClick,
}: {
  isLeft: boolean;
  onClick: () => void;
}) => {
  const icon = isLeft ? <RiArrowLeftSLine /> : <RiArrowRightSLine />;
  return (
    <button
      className={cx(
        "absolute top-1/2 -translate-y-1/2 z-30 text-2xl text-gray-600 bg-white/80 rounded-full cursor-pointer",
        isLeft ? "left-0" : "right-0",
      )}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};
