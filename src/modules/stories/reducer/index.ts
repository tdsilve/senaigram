import { STORIES_REDUCER_ACTIONS } from "../types/enums";
import { StoriesContextType, Payload, Config, StoriesModalPayload } from "../types/type";
import { STORIES_MODAL_REDUCER_ACTIONS } from "../types/enums";
import { STORY_TIMING } from "../constant";

export const storiesReducer = (state: StoriesContextType, action: Payload) => {
  const { type, config } = action;
  switch (type) {
    case STORIES_REDUCER_ACTIONS.TOGGLE_MODAL:
      return {
        ...state,
        modal: {
          status: !state.modal.status,
          userId: config?.userId,
          userName: config?.userName,
        },
      };
    case STORIES_REDUCER_ACTIONS.SET_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          userId: config?.userId,
          userName: config?.userName,
        },
      };
    default:
      return state;
  }
};

export const storiesModalReducer = (state: Config, action: StoriesModalPayload) => {
  const {type, content} = action;
  const config = action.config as Config;
  const { loading, timing, startTiming } = state
  switch(type){
    case STORIES_MODAL_REDUCER_ACTIONS.START_TIMING:
      return {
        ...state,
        startTiming: Date.now(),
        timing: STORY_TIMING
      }
    case STORIES_MODAL_REDUCER_ACTIONS.SET_STORIES:
      return {
        ...state,
        currentStories: content,
      }
    case STORIES_MODAL_REDUCER_ACTIONS.TOGGLE_LOADING:
      
      return {
        ...state,
        loading: !loading,
        timing: (!loading) ? timing - (Date.now() - startTiming) : timing,
        startTiming: Date.now()
      }
    case STORIES_MODAL_REDUCER_ACTIONS.SET_SINGLE_STORY:
      return {
        ...state,
        currentStory: content,
      }

    case STORIES_MODAL_REDUCER_ACTIONS.SET_NEW_STORIES_BATCH:
      return {
        ...state,
        currentStory: config.currentStories?.[0] as string,
        currentStories: config.currentStories as string[],
      }

   
    default: 
      return state;

  }
}
