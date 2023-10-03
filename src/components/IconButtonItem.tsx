"use client";
import { IconButton } from "@mui/material";

import React from "react";

export const IconButtonItem = ({
  defaultIcon,
  activeIcon,
}: {
  defaultIcon: JSX.Element;
  activeIcon?: JSX.Element;
}) => {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <IconButton color="info">{isActive ? activeIcon : defaultIcon}</IconButton>
  );
};
