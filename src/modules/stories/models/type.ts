import { Users } from "../dummyData/data";

export type StoryContent = string;
export type Story = {
  id: number;
  content: StoryContent;
};
export type StoriesContextState = {
  modal: {
    status: boolean;
  } & StoriesActionPayload;
  dispatch: React.Dispatch<StoriesAction>;
};

export type StoriesActionPayload = {
  userId: number;
  userName: string;
  avatar?: string;
};

export type StoriesAction = {
  type: string;
  payload: StoriesActionPayload;
};

export type StoriesModal = {
  stories: Story[];
  currentIndex: number;
  content: StoryContent;
  users: Users[];
};

export type StoriesModalItems = {
  currentStories: Story[];
  currentIndex: number;
  content: StoryContent;
  users: Users[];
};

export type StoriesModalContextType = {
  stories: StoriesModalItems;
  setStories: (val: (draft: StoriesModalItems) => void) => void;
  setCurrentContentStory: (val: StoriesActionPayload) => void;
};
