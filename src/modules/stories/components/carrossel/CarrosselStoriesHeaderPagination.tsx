import React from "react";
import { cx } from "@/lib/css";
import { motion } from "framer-motion";

type CarrosselHeaderPaginationProps = {
  quantity: number;
  currentIndex: number;
  isCurrentUser: boolean;
};

export const CarrosselStoriesHeaderPagination = ({
  quantity,
  currentIndex,
  isCurrentUser,
}: CarrosselHeaderPaginationProps) => {
  const variants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  return (
    <div className="flex gap-2 w-full mb-4">
      {Array(quantity)
        .fill(0)
        .map((_, index) => {
          const isCurrent = isCurrentUser && currentIndex === index;

          return (
            <div
              key={index}
              className="bg-white/30 w-full h-[2px] rounded-full overflow-hidden"
            >
              <motion.div
                animate={isCurrent ? "open" : "closed"}
                initial={false}
                variants={variants}
                transition={{ duration: 0.5, ease: "easeIn" }}
                className={cx(
                  isCurrent ? "bg-white" : "bg-white/30 hidden",
                  "h-full rounded-full",
                )}
              />
            </div>
          );
        })}
    </div>
  );
};
