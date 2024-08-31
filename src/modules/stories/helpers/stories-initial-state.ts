import { StoriesContextType } from "../types/type";

export const getStoriesInitialState = (): StoriesContextType => {
   return { modal: {
        status: false,
        userId: 0
    },
    dispatch: () => undefined
}
}