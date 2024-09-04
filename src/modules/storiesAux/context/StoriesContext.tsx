import React from "react";
import { StoriesContextState } from "../types/type";
import { getStoriesInitialState } from "../helpers/getStoriesInitialState";

export const StoriesContext = React.createContext<StoriesContextType>(
  getStoriesInitialState(),
);

export const useStoriesContext = () => React.useContext(StoriesContext);
