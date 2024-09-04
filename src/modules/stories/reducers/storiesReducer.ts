import { STORIES_ACTIONS } from "../models/enum";
import { StoriesAction, StoriesContextState } from "../models/type";

export const storiesReducer = (
  state: StoriesContextState,
  action: StoriesAction,
) => {
  const { type, payload } = action;
  switch (type) {
    case STORIES_ACTIONS.TOGGLE_MODAL:
      return {
        ...state,
        modal: {
          status: !state.modal.status,
          userId: payload.userId,
          userName: payload.userName,
          avatar: payload?.avatar,
        },
      };
    case STORIES_ACTIONS.SET_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          userId: payload.userId,
          userName: payload.userName,
          avatar: payload?.avatar,
        },
      };
    default:
      return state;
  }
};
