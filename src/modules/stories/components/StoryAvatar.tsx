import { cx } from "@/lib/css";
import React from "react";
import Image from "next/image";

const Avatar = ({ avatar }: { avatar?: string }) => (
  <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-primary-500 p-1 ">
    <div className="w-full h-full rounded-full bg-black overflow-hidden relative">
      <Image src={avatar ?? ""} alt="" fill />
    </div>
  </div>
);

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
    <div className={cx(" grid items-center gap-1 w-fit", className)}>
      <Avatar avatar={avatar} />

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
