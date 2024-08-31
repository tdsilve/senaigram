import { STORIES_REDUCER_ACTIONS } from "../types/enums";
import { StoriesContextType, Payload } from "../types/type";

export const storiesReducer = (state: StoriesContextType, action: Payload) => {
    const {type, config} = action;
    switch(type){
        case STORIES_REDUCER_ACTIONS.TOGGLE_MODAL:
            return {
                ...state,
                modal: {
                    status: !state.modal.status,
                    userId: config?.userId,
                    userName: config?. userName,
                }
            }
        case STORIES_REDUCER_ACTIONS.SET_MODAL:
            return {
                ...state,
                modal: {
                    ...state.modal,
                    userId: config?.userId,
                    userName: config ?.userName
                }
            }
        default:
            return state;
    }
}