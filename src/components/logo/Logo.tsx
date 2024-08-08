import Image from "next/image"

type LogoProps = {
    width: number;
    height: number;
    className ?: string;
}

export const Logo = ({width = 40, height = 40, className}:LogoProps) => {
    return <Image src={"/senaigram-logo.svg"} width={width} height={height} alt="" className={className}/>
}