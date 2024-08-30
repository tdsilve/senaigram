import { Users } from '@/modules/stories/aux/users';
import React from 'react'
import { StoryUserAvatar } from './StoryUserAvatar'

export const StoryBubble = ({ user }: { user: Users }) => {

  return (
    <div className='cursor-pointer grid items-center gap-1' >
      <StoryUserAvatar src={user?.avatar} />
      <div className='text-md overflow-hidden w-16 text-ellipsis'>{user.name}</div>
    </div>
  )
}
