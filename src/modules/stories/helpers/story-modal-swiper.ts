import { Users } from "../dummyData/data";
import { StoriesModalItems, Story } from "../models/type";

export const findAndGetCurrentStoryIndex = (data: StoriesModalItems) => {
  const current = data.currentStories.findIndex(
    (s) => s.id === data.currentStory.id,
  );
  const notFound = current === -1;
  const find = notFound ? false : true;
  const currentIndex = notFound ? 0 : current;
  return {
    findCurrentStoryIndex: find,
    currentStoryIndex: currentIndex,
  };
};

export const getNextStoryIndex = (data: StoriesModalItems) => {
  const { findCurrentStoryIndex, currentStoryIndex } =
    findAndGetCurrentStoryIndex(data);
  if (findCurrentStoryIndex) return 0;
  if (hasRemainStories(data, currentStoryIndex)) return currentStoryIndex + 1;
  return 0;
};

export const hasRemainStories = (
  data: StoriesModalItems,
  currentStoryIndex: number,
) => {
  return currentStoryIndex < data.currentStories.length - 1;
};

export const findAndGetCurrentUserIndex = (
  data: StoriesModalItems,
  userId: number,
) => {
  const current = data.users.findIndex((s) => s.authorId === userId);
  const notFound = current === -1;
  const find = notFound ? false : true;
  const currentIndex = notFound ? 0 : current;
  return {
    findCurrentUserIndex: find,
    currentUserIndex: currentIndex,
  };
};

export const getNextUserIndex = (data: StoriesModalItems, userId: number) => {
  const { findCurrentUserIndex, currentUserIndex } = findAndGetCurrentUserIndex(
    data,
    userId,
  );
  if (findCurrentUserIndex) return 0;
  if (hasRemainUsers(data, currentUserIndex)) return currentUserIndex + 1;
  return 0;
};

export const hasRemainUsers = (
  data: StoriesModalItems,
  currentUserIndex: number,
) => {
  return currentUserIndex < data.users.length - 1;
};
