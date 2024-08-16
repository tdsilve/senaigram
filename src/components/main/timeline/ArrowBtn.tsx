import { cx } from "@/lib/css";


export const ArrowBtn = ({ arrow, className, isRight }: { arrow: React.ReactNode; className?: string; isRight?: boolean }) => (
    <button className={cx("absolute top-1/2 -translate-y-1/2 text-2xl text-gray-600 bg-white/80 rounded-full ", className, isRight ? "right-1" : "left-1")}>{arrow}</button>
)