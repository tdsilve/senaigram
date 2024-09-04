import { STORIES_ACTIONS } from "../models/enum";
import { StoriesAction, StoriesActionPayload } from "../models/type";
export const toggleStoryModal = (
  dispatch: React.Dispatch<StoriesAction>,
  payload: StoriesActionPayload,
) => {
  dispatch({ type: STORIES_ACTIONS.TOGGLE_MODAL, payload });
};
