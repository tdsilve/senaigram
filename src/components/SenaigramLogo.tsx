import Image from "next/image";
import ImageLogo from "../assets/senaigram-logo.png";

export const SenaigramLogo = ({
  width= 30,
  height = 30,
}: {
  width?: number;
  height?: number;
}) => {
  return <Image width={width} height={height} alt="Logo" src={ImageLogo} />;
};