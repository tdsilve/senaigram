import React from "react";

import { motion } from "framer-motion";

import { cx } from "@/lib/css";

type ProgressBarProps = {
  isCurrent: boolean;
};

export const ProgressBar = ({ isCurrent }: ProgressBarProps) => {
  const variants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  return (
    <div className="bg-white w-full h-[2px] rounded-full overflow-hidden">
      <motion.div
        animate={isCurrent ? "open" : "closed"}
        initial={false}
        variants={variants}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cx(
          isCurrent ? "bg-white" : "bg-black/60",
          "h-full rounded-full",
        )}
      />
    </div>
  );
};
