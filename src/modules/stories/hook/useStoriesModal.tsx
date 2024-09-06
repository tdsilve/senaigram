import { useImmer } from "use-immer";
import { StoriesActionPayload, StoriesContextState } from "../models/type";
import { USERS, Users } from "../dummyData/data";
import { getModalStoriesAndContent } from "../helpers/getModalStoriesAndContent";
import { useStoriesContext } from "../context/StoriesContext";
import { toggleStoryModal } from "../helpers/toggleStoryModal";
import { setStoryModal } from "../helpers/setStoryModal";

export const useStoriesModal = (data: Users[]) => {
  const { modal } = useStoriesContext();
  const { currentStories, currentStory } = getModalStoriesAndContent(
    data,
    modal.userId,
  );

  const [stories, setStories] = useImmer({
    currentStories,
    currentUserIndex: 0,
    currentStory,
    users: data,
  });

  const setCurrentContentStory = (val: StoriesActionPayload) => {
    const { currentStory } = getModalStoriesAndContent(data, val.userId);
    setStories((state) => {
      state.currentStory = currentStory;
    });
  };

  const startStoriesModalTransition = ({
    modal,
    dispatch,
  }: StoriesContextState) => {
    // se nao há next stories e next user -> close modal
    //se houver current stories, atualiza o content para o proximo story
    // se não houver current stories, atualiza o user
    const currentStoryIndex = stories.currentStories.findIndex(
      (s) => s.id === stories.currentStory.id,
    );

    if (currentStoryIndex === -1) {
      toggleStoryModal(dispatch, modal);
      return;
    }

    const storiesRemaining =
      currentStoryIndex < stories.currentStories.length - 1;
    if (storiesRemaining) {
      // Move to the next story
      const nextStoryIndex = currentStoryIndex + 1;
      setStories((state) => {
        state.currentStory = stories.currentStories[nextStoryIndex];
      });
    } else {
      // No more stories, find the next user
      const currentUserIndex = USERS.findIndex(
        (u) => u.authorId === modal.userId,
      );
      if (currentUserIndex === -1) {
        toggleStoryModal(dispatch, modal);
        return;
      }
      const remainUsers = currentUserIndex < USERS.length - 1;
      if (!remainUsers) {
        toggleStoryModal(dispatch, modal);
        return;
      }
      const nextUserIndex = currentUserIndex + 1;

      setStoryModal(dispatch, {
        userId: USERS[nextUserIndex].authorId,
        userName: USERS[nextUserIndex].name,
        avatar: USERS[nextUserIndex].avatar,
      });

      setStories((state) => {
        state.currentStory = USERS[nextUserIndex].stories[0];
        state.currentStories = USERS[nextUserIndex].stories;
      });
      if (!remainUsers || currentUserIndex == -1) {
        toggleStoryModal(dispatch, modal);
        return;
      }
    }
  };

  return {
    stories,
    setStories,
    setCurrentContentStory,
    startStoriesModalTransition,
  };
};
