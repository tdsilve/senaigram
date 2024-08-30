import React from 'react'

export const StoryUserAvatar = ({ src }: { src?: string }) => {
    const imgSrc = src ?? "";
    return (
        <div className='w-16 h-16 rounded-full gradient overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-primary-500 p-1'>
            <div className='w-full h-full rounded-full bg-black overflow-hidden'>
                <img src={imgSrc} alt='' />
            </div>

        </div>
    )
}
