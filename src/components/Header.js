import React from "react";
import Image from "next/image";
import {
  CameraIcon,
  HeartIcon,
  HomeIcon,
  MenuIcon,
  PaperAirplaneIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import { useRouter } from "next/router";



export default function Header() {
  const router = useRouter()
  const handleClick = () => {
    router.push('/')
  }
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between h-16 max-w-6xl p-3 bg-white border-b shadow-sm xl:mx-auto">
      <div className="relative hidden w-24 h-24 lg:inline-grid">
        <Image
          src="/senaigram-logo.svg"
          layout="fill"
          objectFit="contain"
          alt="senaigram logo"
          
        />
      </div>
      <div className="w-12 h-12 lg:hidden ">
        <CameraIcon />
      </div>
      <div className="relative p-3 mt-1 rounded-md ">
        <div className="absolute pl-2 transform -translate-y-1/2 top-1/2">
          <SearchIcon className="w-5 h-5 text-gray-500 border-gray-300" />
        </div>

        <input
          type="text"
          placeholder="Search..."
          className="block w-full border-2 rounded-md bg-gray-50 pl-9 focus:ring-black focus:border-black border-gray"
        />
      </div>
      <div className="flex items-center justify-end space-x-4">
        <HomeIcon className="navBtn" />
        <PaperAirplaneIcon className="navBtn" />
        <HeartIcon className="navBtn" />
        <MenuIcon className="w-8 h-8 cursor-pointer" />
        <div className="mt-2 mr-4">
          <Image
            src="/senaigramProfilePicture.png"
            alt="profile picture"
            width={50}
            height={50}
            className="rounded-full cursor-pointer"
            onClick = {handleClick}
          />
        </div>
      </div>
    </header>
  );
}
