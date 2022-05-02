import React from "react";
import Image from "next/image";
import { HeartIcon, PaperAirplaneIcon, ChatIcon } from "@heroicons/react/solid";
import {useRouter} from "next/router";

export default function Post({imgUrl, description, userEmail}) {
  const router = useRouter()
  const handleDoubleClick = (e) => {
    e.target.style.color = "red";
  };

  const handleClick = () => {
    router.push({
      pathname: 'user-profile',
      query: {
        userEmail: userEmail
      }
    })
  };

  return (
    <div className="border border-gray pt-4 pb-2 mt">
      <div className="flex justify-start items-center mb-4 pl-2">
        <Image src='/pexel.jpeg' width={40} height={40} objectFit='cover' alt='user Profile Picture' className="rounded-full"/>
        <a
          className="ml-3 capitalize cursor-pointer"
          onClick={handleClick}
        >
          {userEmail}
        </a>
      </div>
      <div className="relative w-full h-96">
        <Image src={imgUrl} layout="fill" objectFit="cover" alt="post photo" />
      </div>
      <p>{description}</p>
      <div className="flex mt-2">
        <HeartIcon className="postBtn" onDoubleClick={handleDoubleClick} />
        <PaperAirplaneIcon className="postBtn" />
        <ChatIcon className="postBtn" />
      </div>
    </div>
  );
}
