import { STORIES_ACTIONS } from "../models/enum";
import { Payload, StoriesContexType } from "../models/type";
import { Reducer } from "react";

export const storiesReducer = (state: StoriesContexType, action: Payload) => {
  const { type, config } = action;
  switch (type) {
    case STORIES_ACTIONS.TOGGLE_MODAL:
      return {
        ...state,
        modal: {
          status: !state.modal.status,
          userId: config.userId,
          userName: config.userName,
          avatar: config?.avatar,
        },
      };
    case STORIES_ACTIONS.SET_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          userId: config.userId,
          userName: config.userName,
          avatar: config?.avatar,
        },
      };
    default:
      return state;
  }
};
