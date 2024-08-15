"use client";
import * as animationData from "@/assets/lottie/Signup-animation.json";
import Lottie from "react-lottie";

type SignUpAnimationProps = {
  width?: number;
  height?: number;
};

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const SignUpAnimation = ({
  width = 400,
  height = 400,
}: SignUpAnimationProps) => {
  return <Lottie options={defaultOptions} height={width} width={height} />;
};
