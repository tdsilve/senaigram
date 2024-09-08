import { cx } from "@/lib/css";
import React from "react";
import Image from "next/image";

export const StoryAvatar = ({
  avatar,
  userName,
  className,
  userNameWidth,
}: {
  avatar?: string;
  userName: string;
  className?: string;
  userNameWidth?: string;
}) => {
  return (
    <div className={cx(" grid items-center gap-1", className)}>
      <div className="w-20 h-20 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-primary-500 p-1 ">
        <div className="w-full h-full rounded-full bg-black overflow-hidden relative">
          <Image src={avatar ?? ""} alt="" fill />
        </div>
      </div>

      {userName && (
        <div
          className={cx(
            "text-md overflow-hidden text-ellipsis",
            userNameWidth ? userNameWidth : "w-16",
          )}
        >
          {userName}
        </div>
      )}
    </div>
  );
};
