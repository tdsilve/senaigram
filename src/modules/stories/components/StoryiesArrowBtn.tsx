import { cx } from "@/lib/css";

export const StoriesArrowButton = ({
  arrow,
  className,
  isRight,
  onClick,
}: {
  arrow: React.ReactNode;
  className?: string;
  isRight?: boolean;
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    className={cx(
      "absolute z-30 top-1/2 -translate-y-1/2 text-2xl text-gray-600 bg-white/80 rounded-full cursor-pointer",
      className,
      isRight ? "right-1" : "left-1",
    )}
  >
    {arrow}
  </button>
);
