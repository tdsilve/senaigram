import React from "react";
import { useImmer } from "use-immer";
import { StoriesActionPayload } from "../models/type";
import { Users } from "../dummyData/data";
import { getModalStoriesAndContent } from "../helpers/getModalStoriesAndContent";
import { useStoriesContext } from "../context/StoriesContext";

export const useStoriesModal = (data: Users[]) => {
  const { modal, dispatch } = useStoriesContext();
  const { currentStories, currentContent } = getModalStoriesAndContent(
    data,
    modal.userId,
  );

  const [stories, setStories] = useImmer({
    currentStories,
    currentIndex: 0,
    content: currentContent,
    users: data,
  });

  const setCurrentContentStory = (val: StoriesActionPayload) => {
    const { currentContent } = getModalStoriesAndContent(data, val.userId);
    console.log("hey 2", val.userId);
    setStories((state) => {
      state.content = currentContent;
    });
  };

  return {
    stories,
    setStories,
    setCurrentContentStory,
  };
};
