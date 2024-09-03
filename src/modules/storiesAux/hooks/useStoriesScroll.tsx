import { Users } from "@/modules/storiesAux/aux/users";
import React from "react";

export const useStoriesScroll = (users: Users[]) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [showScrollLeft, setShowScrollLeft] = React.useState(false);
  const [showScrollRight, setShowScrollRight] = React.useState(false);
  const SCROLL_DISTANCE = 150;

  React.useEffect(() => {
    if (!containerRef?.current) return;
    const container = containerRef.current;

    const isOverflow = () => {
      return container.scrollWidth > container.clientWidth;
    };
    const canScrollLeft = () => {
      return container.scrollLeft > 0;
    };

    const canScrollRight = () => {
      const scrollRight =
        container.scrollWidth - container.clientWidth - container.scrollLeft;
      return scrollRight > 0;
    };

    const setScrollArrows = () => {
      if (!isOverflow()) return;
      setShowScrollLeft(canScrollLeft());
      setShowScrollRight(canScrollRight());
    };
    setScrollArrows();

    container.addEventListener("scroll", setScrollArrows);
    return () => container.removeEventListener("scroll", setScrollArrows);
  }, [users]);

  const onScroll = (val: number) => {
    const { current } = containerRef;
    if (!current) return;
    current.scrollBy({
      left: val,
      behavior: "smooth",
    });
  };
  const onScrollLeft = () => {
    onScroll(-SCROLL_DISTANCE);
  };
  const onScrollRight = () => {
    onScroll(SCROLL_DISTANCE);
  };

  return {
    containerRef,
    showScrollLeft,
    showScrollRight,
    onScrollLeft,
    onScrollRight,
  };
};
