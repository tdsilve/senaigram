import { USERS } from "../dummyData/data";

export const getInitialModalStories = (userId: number) => {
  const currentIndex = USERS.findIndex((u) => u.authorId === userId);
  const notFound = currentIndex === -1;
  if (notFound) return null;
  return USERS[currentIndex].stories;
};
