"use client";
import { useEffect, useRef, useState } from "react";

export function useCarousel(scrollSpeed = 200, intervalTime = 2500) {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Autoplay
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollStep = () => {
      if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth - 10) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: scrollSpeed, behavior: "smooth" });
      }
    };

    const interval = setInterval(scrollStep, intervalTime);
    return () => clearInterval(interval);
  }, [scrollSpeed, intervalTime]);

  // Drag manual
  const handleMouseDown = (e: React.MouseEvent) => {
    const slider = sliderRef.current;
    if (!slider) return;
    setIsDragging(true);
    setStartX(e.pageX - slider.offsetLeft);
    setScrollLeft(slider.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const slider = sliderRef.current;
    if (!isDragging || !slider) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.2;
    slider.scrollLeft = scrollLeft - walk;
  };

  return {
    sliderRef,
    isDragging,
    handleMouseDown,
    handleMouseLeave,
    handleMouseUp,
    handleMouseMove,
  };
}
