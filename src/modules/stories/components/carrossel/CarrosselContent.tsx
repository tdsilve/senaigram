import React from "react";
import { cx } from "@/lib/css";

type CarrosselContentProps = {
  isActive: boolean;
  src?: string;
};

export const CarrosselContent = ({ isActive, src }: CarrosselContentProps) => {
  return (
    <div
      className={cx(
        "rounded-xl overflow-hidden border transition-all translate-y-14  bg-black",
        isActive ? "h-[600px] scaley-105 translate-y-0" : "h-[500px]",
      )}
    >
      <img
        alt=""
        src={src ?? ""}
        className="block w-full h-full object-cover"
        draggable={false}
      />
    </div>
  );
};
