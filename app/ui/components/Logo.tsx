import Image from "next/image";

export const Logo = ({
  width = 150,
  height = 100,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <Image
      alt="Logo"
      src={"/senaigram-logo.svg"}
      width={width}
      height={height}
      priority
    />
  );
};
