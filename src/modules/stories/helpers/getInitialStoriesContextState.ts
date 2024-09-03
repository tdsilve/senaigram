import { StoriesContexType } from "../models/type";

export const getInitialStoriesContextState = (): StoriesContexType => {
  return {
    modal: {
      status: false,
      userId: 0,
      userName: "",
    },
    dispatch: () => undefined,
  };
};
