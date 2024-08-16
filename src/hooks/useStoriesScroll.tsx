import React from 'react';

export const useStoriesScroll = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [showScrollLeft, setShowScrollLeft] = React.useState(false);
    const [showScrollRight, setShowScrollRight] = React.useState(false);


    React.useEffect(() => {

        if (!containerRef?.current) return;
        const container = containerRef.current;

        const isOverflow = () => {
         
            return container.scrollWidth > container.clientWidth;
        }
        const canScrollLeft = () => {
            return container.scrollLeft > 0;
        }

        const canScrollRight = () => {
            const scrollRight = container.scrollWidth - container.clientWidth - container.scrollLeft;
            return scrollRight > 0;
        }

        const setScrollArrows = () => {
            if (!isOverflow()) return;
            setShowScrollLeft(canScrollLeft());
            setShowScrollRight(canScrollRight());
        }
        setScrollArrows();

        container.addEventListener('scroll', setScrollArrows);
        return () => container.removeEventListener('scroll', setScrollArrows);
        
    }, []);

    return {containerRef, showScrollLeft, showScrollRight};
}