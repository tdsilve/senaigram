import React from 'react'
import { StoryUserAvatar } from '../story-user-avatar/StoryUserAvatar'
import { USERS } from '../../aux/users'
import { RiPauseFill, RiCloseFill } from "react-icons/ri";

type StoryContentProps = {
  handleClick : () => void;
  userId: number;
   userName ?: string;
}
export const StoryContent = ({handleClick, userId, userName}: StoryContentProps) => {
  return (
    <div className="flex justify-between items-start p-3 text-white w-full">
      <div className="flex flex-col items-center">
        <StoryUserAvatar src={USERS[userId].avatar} />
        {userName && <span className="font-bold ">{userName}</span>}
      </div>
      <div>
        <button className="font-bold text-2xl"><RiPauseFill /></button>
        <button className="font-bold text-2xl " onClick={handleClick}><RiCloseFill /></button>
      </div>

    </div>
  )
}
