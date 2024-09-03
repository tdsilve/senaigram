import React from "react";
import { StoriesContextType } from "../types/type";
import { getStoriesInitialState } from "../helpers/getStoriesInitialState";

export const StoriesContext = React.createContext<StoriesContextType>(
  getStoriesInitialState(),
);

export const useStoriesContext = () => React.useContext(StoriesContext);
