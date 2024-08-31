import { STORIES_REDUCER_ACTIONS } from "./enums";

export type StoriesContextType = {
    modal: {
        status: boolean;
        userId: number | string;
        userName?: string | undefined;
    },
    dispatch: React.Dispatch<Payload>
}
export type Payload = {
    type: STORIES_REDUCER_ACTIONS;
    content ?: any;
    config: PayloadConfig;
}

export type PayloadConfig = {
    userId: number | string;
    userName ?: string;
}

export type Config = {
    userId: number | string;
    userName ?: string;
    currentStories: string[],
    currentStory: string;
    loading: boolean;
    timing: number;
    startTiming: number;
    storiesDispatch: React.Dispatch<Payload>
}