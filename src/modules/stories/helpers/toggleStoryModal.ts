import { STORIES_ACTIONS } from "../models/enum"
import { Payload, PayloadConfig } from "../models/type"
export const toggleStoryModal = (dispatch: React.Dispatch<Payload>, config: PayloadConfig) => {
    dispatch({type: STORIES_ACTIONS.TOGGLE_MODAL, config})
}