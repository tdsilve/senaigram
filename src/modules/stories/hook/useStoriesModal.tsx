import React from "react";
import { useImmer } from "use-immer";
import { Story } from "../models/type";
import { Users } from "../dummyData/data";
import { getCurrentModalStories } from "../helpers/getCurrentModalStories";

type StoriesModal = {
  stories: Story[];
  currentIndex: number;
  content: string;
  users: Users[];
};

export const useStoriesModal = (data: Users[], userId: number) => {
  const currentStories = getCurrentModalStories(data, userId);
  const content = currentStories[0].content;
  const [stories, setStories] = useImmer({
    stories: currentStories,
    currentIndex: 0,
    content,
    users: data,
  });
  console.log("hey useStoriesModal", currentStories);
  return {
    content,
  };
};
