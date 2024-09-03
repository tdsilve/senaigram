import React from "react";
import { useStoriesModal } from "../../hooks/useStoriesModal";

import { STORY_TIMING } from "../../constant";
import { Timer } from "../../class/timer";
import { STORIES_MODAL_REDUCER_ACTIONS } from "../../types/enums";
import { startStoryTransition } from "../../helpers/startStoryTransition";

type StoriesHoverProps = {
  children: React.ReactNode;
};
export const StoriesHover = ({ children }: StoriesHoverProps) => {
  /*1. Como contabilizar o tempo e fazer a mudança do post?
    A lógica aplicada é quando a imagem is loaded começa a contar o tempo
    2. como seria a estrutura de dados */

  const {
    storiesStateInitialValue,
    storyTransitionConfig,
    inPause,
    dispatch,
    userAvatar,
    userName,
    userId,
  } = useStoriesModal();
  console.log(storiesStateInitialValue);
  const { currentStory } = storiesStateInitialValue;
  const { currentStoryIndex, currentStories } = storyTransitionConfig;

  React.useEffect(() => {
  }, [storyTransitionConfig.currentStoryIndex]);

  const configStoryTransition = {
    userId,
    currentStoryIndex,
    currentStories,
    storiesDispatch: storyTransitionConfig.storiesDispatch,
    dispatch,
  };

  const handleOnLoad = () => {
    Timer.id = setTimeout(
      () => startStoryTransition(configStoryTransition),
      STORY_TIMING,
    );
    configStoryTransition.storiesDispatch?.({
      type: STORIES_MODAL_REDUCER_ACTIONS.START_TIMING,
    });
  };

  return (
    <div className="w-full h-full">
      <img src={currentStory} alt="" onLoad={handleOnLoad} />
      {children}
    </div>
  );
};
