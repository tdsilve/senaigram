"use client";
import React from "react";

export const useStoriesScroll = () => {
  const SCROLL_DISTANCE = 150;
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [showScrollLeft, setShowScrollLeft] = React.useState(false);
  const [showScrollRight, setShowScrollRight] = React.useState(false);

  React.useEffect(() => {
    const container = containerRef?.current;
    if (!container) return;

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
  }, []);

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
