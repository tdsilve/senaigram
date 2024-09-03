import { STORIES_ACTIONS } from "./enum";

export type StoriesContexType = {
    modal: {
        status: boolean;
        userId: number;
        userName: string;
        avatar?: string;
    }
    dispatch: React.Dispatch<Payload>

}

export type PayloadConfig = {
    content?: React.ReactNode;
    userId: number;
    userName: string;
    avatar?: string;
}

export type Payload = {
    type: string;
    config: PayloadConfig;
}

