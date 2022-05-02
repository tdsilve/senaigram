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
    <header className="flex justify-between max-w-6xl h-16 p-3 items-center xl:mx-auto shadow-sm border-b bg-white sticky z-50 top-0">
      <div className="relative hidden lg:inline-grid h-24 w-24">
        <Image
          src="/senaigram-logo.svg"
          layout="fill"
          objectFit="contain"
          alt="senaigram logo"
          
        />
      </div>
      <div className="lg:hidden h-12 w-12 ">
        <CameraIcon />
      </div>
      <div className="relative mt-1 p-3 rounded-md ">
        <div className="absolute top-1/2 transform  -translate-y-1/2 pl-2">
          <SearchIcon className="h-5 w-5 text-gray-500 border-gray-300" />
        </div>

        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-50 pl-9 block w-full focus:ring-black focus:border-black border-2 border-gray rounded-md"
        />
      </div>
      <div className="flex items-center justify-end space-x-4">
        <HomeIcon className="navBtn" />
        <PaperAirplaneIcon className="navBtn" />
        <HeartIcon className="navBtn" />
        <MenuIcon className="h-8 w-8 cursor-pointer" />
        <div className="mr-4 mt-2">
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
