import React from "react";
import { useStoriesContext } from "../context/StoriesContext";
import { USERS } from "../dummyData/data";
import { getInitialModalStories } from "../helpers/getInitialModalStories";

export const useStoriesModal = () => {
  const {
    modal: { userId, userName },
    dispatch,
  } = useStoriesContext();
  const [inPause, setInPause] = React.useState(false);
  const storiesIndex = USERS.findIndex((user) => user.authorId === userId);
  const initialStories = getInitialModalStories(userId);

  console.log(initialStories);

  return {
    initialStories,
  };
};
