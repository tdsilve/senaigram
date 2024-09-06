import {
  StoriesModalContextType,
  StoriesModalItems,
  StoriesActionPayload,
  StoriesContextState,
} from "../models/type";

export const getInitialStoriesModalContextState =
  (): StoriesModalContextType => {
    return {
      setStories: (val: (draft: StoriesModalItems) => void) => {},
      stories: {
        currentStories: [
          {
            id: 0,
            content: "",
          },
        ],
        currentStory: {
          id: 0,
          content: "",
        },
        users: [
          {
            id: 0,
            authorId: 0,
            name: "",
            avatar: "",
            stories: [
              {
                id: 0,
                content: "",
              },
            ],
          },
        ],
      },
      setCurrentContentStory: (val: StoriesActionPayload) => {},
      startStoriesModalTransition: (val: StoriesContextState) => {},
    };
  };
