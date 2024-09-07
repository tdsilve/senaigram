"use client";
import React from "react";
import { useStoriesModalContext } from "../../context/StoriesModalContext";
import { useStoriesContext } from "../../context/StoriesContext";
import { StoryAvatar } from "../StoryAvatar";
import { RiPlayFill } from "react-icons/ri";
import { toggleStoryModal } from "../../helpers/toggleStoryModal";
import { SwiperSlide } from "swiper/react";

import { USERS } from "../../dummyData/data";

import { CarrosselContainer } from "../carrossel/CarrosselContainer";

export const StoriesSwiper = () => {

    const { dispatch, modal } = useStoriesContext();

    const { stories, startStoriesModalTransition, setStories } = useStoriesModalContext();

    const handleModal = () => {
        toggleStoryModal(dispatch, modal);
    };

    const handleOnLoad = () => {
        // setTimeout(() => {
        //   startStoriesModalTransition({ modal, dispatch });
        // }, 1000);
    };

    return (
        <CarrosselContainer>
            {USERS?.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className="w-full mx-auto h-full rounded-xl overflow-hidden p-4">
                        <div className=" w-full mx-auto">
                            <div className="flex items-center justify-between p-4 w-full">
                                <StoryAvatar
                                    userName={`${item.name} + ${item.id}`}
                                    avatar={item.avatar}
                                    className="text-white grid-flow-col gap-3"
                                    userNameWidth="w-40"
                                />
                                <button className="text-white text-2xl">
                                    <RiPlayFill />
                                </button>
                            </div>
                            <div className="h-full w-full">
                                <img
                                    alt=""
                                    src={stories.currentStories[0]?.content ?? ""}
                                    onLoad={handleOnLoad}
                                    className="max-w-full h-full object-contain"
                                    draggable={false}
                                />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}


        </CarrosselContainer>
    );
};
