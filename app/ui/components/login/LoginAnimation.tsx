"use client";
import Lottie from "react-lottie";
import * as animationData from "../../lotties/login-animation.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};

export const LoginAnimation = () => {
  return <Lottie options={defaultOptions} />;
};
