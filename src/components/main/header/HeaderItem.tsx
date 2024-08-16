import { Tooltip, TooltipProps } from "@mui/material";
import Link from "next/link";

type HeaderItemProps = {
  label: string;
  route?: string;
  content: any;
  placement: TooltipProps["placement"];
};
export const HeaderItem = ({
  label,
  route,
  content,
  placement,
}: HeaderItemProps) => {
  return (
    <Tooltip title={label} arrow placement={placement}>
      <Link href={route ?? "/"} className="text-2xl cursor-pointer">
        {content}
      </Link>
    </Tooltip>
  );
};
