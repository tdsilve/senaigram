"use client";
import React from 'react'
import { USERS } from '@/modules/stories/aux/users';
import { useStoriesScroll } from '@/modules/stories/hooks/useStoriesScroll';
import { StoriesArrowButton } from '../StoryiesArrowBtn';
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { StoryBubble } from './StoryBubble';

export const StoriesUserAvatarContainer = () => {
    const { containerRef, showScrollLeft, showScrollRight, onScrollLeft, onScrollRight } = useStoriesScroll(USERS);

    return (
        <div className='relative'>
            <div
                className="flex  w-full gap-5  p-4 overflow-x-auto"
                ref={containerRef}
            >
                {
                    USERS.map(user => (
                        <StoryBubble key={user.id} user={user} />
                    ))
                }
            </div>
            {showScrollRight && (
                <StoriesArrowButton arrow={<RiArrowRightSLine />} isRight={true} onClick={onScrollRight} />
            )}
            {showScrollLeft && <StoriesArrowButton arrow={<RiArrowLeftSLine />} onClick={onScrollLeft} />}

        </div>
    )
}
