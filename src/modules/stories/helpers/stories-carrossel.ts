import { Users } from "../dummyData/data";

export const getCurrentUserIndex = (userId: number, data: Users[]) => {
  const index = data.findIndex((d) => d.authorId === userId);
  return index;
};

export const isIndexFound = (index: number) => {
  return index !== -1;
};

export const getCurrentStoryIndex = () => {};
