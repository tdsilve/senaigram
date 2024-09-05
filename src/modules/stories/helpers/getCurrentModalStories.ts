import { Users } from "../dummyData/data"


export const getCurrentModalStories = (data: Users[], userId: number) => {
  const userIdIndex = data.findIndex((d) => d.authorId === userId );
  const notFound = userIdIndex === -1;
  const currentData = notFound ? data[0].stories : data[userIdIndex].stories;
  return currentData
}
