"use client";

import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { ArrowBtn } from "./ArrowBtn";
import { useStoriesScroll } from "@/hooks/useStoriesScroll";

export const Stories = () => {
    const {containerRef, showScrollLeft, showScrollRight} = useStoriesScroll();
    return <div className="relative " > 
    <div className="flex  w-full gap-5  p-4 overflow-x-scroll" ref={containerRef}>

        {new Array(15).fill(0).map((_, i) => (
            <div key={i} className="ring-red-500 ring-2 ring-offset-4 rounded-[50%] w-16 h-16 bg-black/60 text-center grid place-items flex-shrink-0"><span>hey</span></div>
        ))

        }
    </div>
        {showScrollRight && <ArrowBtn arrow={<RiArrowRightSLine />} isRight={true} />}
        {showScrollLeft &&  <ArrowBtn arrow={<RiArrowLeftSLine />} />}
    </div>
};
