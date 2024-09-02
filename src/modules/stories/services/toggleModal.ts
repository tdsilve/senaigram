import { STORIES_REDUCER_ACTIONS } from "../types/enums";
import { Config, Payload, PayloadConfig } from "../types/type";
export const toggleModal = (
  dispatch: React.Dispatch<Payload>,
  config: PayloadConfig,
) => {
  dispatch({ type: STORIES_REDUCER_ACTIONS.TOGGLE_MODAL, config });
};
