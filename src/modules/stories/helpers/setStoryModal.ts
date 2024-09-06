import { STORIES_ACTIONS } from "../models/enum";
import { StoriesAction, StoriesActionPayload } from "../models/type";
export const setStoryModal = (
  dispatch: React.Dispatch<StoriesAction>,
  payload: StoriesActionPayload,
) => {
  dispatch({ type: STORIES_ACTIONS.SET_MODAL, payload });
};
