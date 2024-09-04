import { StoriesContextState } from "../models/type";

export const getInitialStoriesContextState = (): StoriesContextState => {
  return {
    modal: {
      status: false,
      userId: 0,
      userName: "",
    },
    dispatch: () => undefined,
  };
};
