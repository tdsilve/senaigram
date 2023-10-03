"use client";

import { Player } from "@lottiefiles/react-lottie-player";

import React from "react";
import { SenaigramLogo } from "../SenaigramLogo";
import { LoginForm } from "./LoginForm";

export const Login = () => {
  return (
    <main className="flex items-center justify-center w-screen h-screen gap-x-3">
      <div className="w-4/5  max-w-[700px] h-[500px] flex gap-4">
        <div className="w-full flex h-[380px] items-center max-sm:hidden">
          <Player
            autoplay
            loop
            src="/assets/login-page-animation.json"
          ></Player>
        </div>
        <div className="w-full flex gap-y-2 ">
          <SenaigramLogo width={50} height={40}/>
            <h1 className="text-3xl font-semibold">Welcome</h1>
            <p className="text-gray-500">Please enter your details.</p>
          <LoginForm />
          <div className="text-sm">
            <span className="text-gray-600">Do not have an account?</span>
            <span className="font-bold text-pink"> Sign up</span>
          </div>
        </div>
      </div>
    </main>
  );
};
