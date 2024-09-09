/* eslint-disable @typescript-eslint/no-unused-vars */

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

export type TrackItem = {
  id: number;
  authorId: number;
  stories: any[];
  storyIndex: number;
  index: number;
  name: string;
  avatar?: string;
};
