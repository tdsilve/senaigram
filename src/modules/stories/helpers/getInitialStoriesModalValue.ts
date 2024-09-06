import React from "react";
import { Users } from "../dummyData/data";
import { StoriesModal } from "../models/type";

export const getInitialStoriesModalValue = (data: Users[]): StoriesModal => {
  return {
    stories: data[0].stories,
    currentStory: data[0].stories[0],
    users: data,
  };
};
