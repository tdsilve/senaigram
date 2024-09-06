import { Users } from "../dummyData/data";

export const getModalStoriesAndContent = (data: Users[], userId: number) => {
  const userIdIndex = data.findIndex((d) => d.authorId === userId);
  const notFound = userIdIndex === -1;
  const initialData = notFound ? data[0].stories : data[userIdIndex].stories;

  return {
    currentStories: initialData,
    currentStory: initialData[0],
  };
};
