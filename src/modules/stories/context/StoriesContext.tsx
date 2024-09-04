"use client";
import React from "react";
import { StoriesContextState } from "../models/type";
import { getInitialStoriesContextState } from "../helpers/getInitialStoriesContextState";
export const StoriesContext = React.createContext<StoriesContextState>(
  getInitialStoriesContextState(),
);
export const useStoriesContext = () => React.useContext(StoriesContext);
