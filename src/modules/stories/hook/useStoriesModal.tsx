import React from "react";
import { useImmer } from "use-immer";
import { StoriesActionPayload, Story } from "../models/type";
import { Users } from "../dummyData/data";
import { getModalStoriesAndContent } from "../helpers/getModalStoriesAndContent";
import { useStoriesContext } from "../context/StoriesContext";
import { toggleStoryModal } from "../helpers/toggleStoryModal";


export const useStoriesModal = (data: Users[]) => {
    const { modal, dispatch } = useStoriesContext();
    const { currentStories, currentContent } = getModalStoriesAndContent(data, modal.userId);

    const [stories, setStories] = useImmer({
        currentStories,
        currentIndex: 0,
        content: currentContent,
        users: data,
    });

    const setCurrentContentStory = (val: StoriesActionPayload) => {

        const { currentContent } = getModalStoriesAndContent(data, val.userId);
        setStories((state) => {
            state.content = currentContent
        })

    }

    return {
        stories,
        setStories,
        setCurrentContentStory
    };
};
