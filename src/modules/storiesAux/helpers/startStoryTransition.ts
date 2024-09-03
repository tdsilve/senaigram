import {
  STORIES_MODAL_REDUCER_ACTIONS,
  STORIES_REDUCER_ACTIONS,
} from "../types/enums";
import { Payload, StoryTransitionConfig } from "../types/type";
import { USERS } from "../aux/users";
import { toggleModal } from "../services/toggleModal";
export const startStoryTransition = (config: StoryTransitionConfig) => {
  const {
    currentStoryIndex,
    currentStories,
    storiesDispatch,
    dispatch,
    userId,
  } = config;

  const storiesRemaining = currentStoryIndex < currentStories.length - 1;

  if (storiesRemaining) {
    const newIndex = currentStoryIndex + 1;
    if (newIndex === currentStories.length - 1)
      toggleModal(dispatch as React.Dispatch<Payload>, config);

    storiesDispatch?.({
      type: STORIES_MODAL_REDUCER_ACTIONS.SET_SINGLE_STORY,
      content: currentStories[newIndex],
    });
  }

  if (!storiesRemaining) {
    const moreUsersStories = USERS.findIndex((u) => u.authorId === userId);

    if (moreUsersStories !== -1) {
      const newStoriesBatch = USERS[userId + 1].stories;
      const userName = USERS.find((user) => user.authorId === userId)?.name;

      storiesDispatch?.({
        type: STORIES_MODAL_REDUCER_ACTIONS.SET_NEW_STORIES_BATCH,
        config: { currentStories: newStoriesBatch } as StoryTransitionConfig,
      });

      dispatch?.({
        type: STORIES_REDUCER_ACTIONS.SET_MODAL,
        config: {
          userId: userId + 1,
          userName,
        },
      });
    }

    if (!moreUsersStories || moreUsersStories == -1)
      toggleModal(dispatch as React.Dispatch<Payload>, config);
  }
};
