"use client";
import * as animationData from "@/assets/lottie/Animation - 1710776567575.json";
import Lottie from "react-lottie";

type SigninAnimationProps = {
  width?: number;
  height?: number;
}

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};



export const SigninAnimation = ({width = 400, height = 400}:SigninAnimationProps) => {
  return <Lottie options={defaultOptions} height={width} width={height} />;
};
