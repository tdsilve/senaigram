export type Story = {
  id: number;
  content: string;
}
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
