import { STORIES_ACTIONS } from "../models/enum";
import { StoriesAction, StoriesContextState } from "../models/type";

export const storiesReducer = (
  state: StoriesContextState,
  action: StoriesAction,
) => {
  const { type, payload } = action;
  console.log("hey dispatch", payload);
  switch (type) {
    case STORIES_ACTIONS.TOGGLE_MODAL:
      // console.log("hey dispatch toggle modal", payload, state.modal.status)
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
      console.log("hey dispatch set modal", payload);
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
