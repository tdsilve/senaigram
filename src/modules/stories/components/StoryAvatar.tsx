import React from 'react'


export const StoryAvatar = ({ avatar, userName, }: { avatar?: string; userName: string; }) => {

    return (
        <div className=" grid items-center gap-1" >
            <div className='w-16 h-16 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-primary-500 p-1 '>
                <div className="w-full h-full rounded-full bg-black overflow-hidden">
                    <img src={avatar ?? ""} alt="" />
                </div>

            </div>

            {userName && <div className='text-md overflow-hidden w-16 text-ellipsis'>{userName}</div>}
        </div>
    )
}
