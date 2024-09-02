import { Timer } from "../class/timer";
import { StoryTransitionConfig } from "../types/type";
import { STORIES_MODAL_REDUCER_ACTIONS } from "../types/enums";

const startStoryTransition = (config: StoryTransitionConfig) => {
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

    storiesDispatch?.({
      type: STORIES_MODAL_REDUCER_ACTIONS.SET_SINGLE_STORY,
      content: currentStories[newIndex],
    });
  }
};

export const togglePause = (storyTransitionConfig: StoryTransitionConfig) => {
  const { storiesDispatch, timing, inPause, setInPause } =
    storyTransitionConfig;

  if (!inPause) clearTimeout(Timer.id);
  if (inPause) Timer.id = setTimeout(start);
};
