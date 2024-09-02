import { STORIES_REDUCER_ACTIONS } from "./enums";

export type StoriesContextType = {
  modal: {
    status: boolean;
    userId: number ;
    userName?: string;
  };
  dispatch: React.Dispatch<Payload>;
};
export type Payload = {
  type: string;
  content?: any;
  config: PayloadConfig;
};

export type StoriesModalPayload = {
  type: string;
  content?: any;
  config?: PayloadConfig;
};

export type PayloadConfig = {
  userId: number;
  userName?: string;
};

export type Config = {
  userId: number;
  userName?: string;
  currentStories: string[];
  currentStory: string;
  loading: boolean;
  timing: number;
  startTiming: number;
  storiesDispatch: React.Dispatch<StoriesModalPayload>;
};

export type StoryTransitionConfig = {
  currentStoryIndex: number;
  currentStories: string[];
  userId: number;
  storiesDispatch: React.Dispatch<StoriesModalPayload> | null;
  dispatch: React.Dispatch<Payload> | null;
  timing?: number;
  inPause?: boolean;
  setInPause?: React.Dispatch<React.SetStateAction<boolean>>;
}
