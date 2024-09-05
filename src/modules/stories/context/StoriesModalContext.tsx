"use client";
import React from "react";
import { StoriesModalContextType } from "../models/type";
import { getInitialStoriesModalContextState } from "../helpers/getInitialStoriesModalContextState";

export const StoriesModalContext = React.createContext<StoriesModalContextType>(
  getInitialStoriesModalContextState(),
);
export const useStoriesModalContext = () =>
  React.useContext(StoriesModalContext);
