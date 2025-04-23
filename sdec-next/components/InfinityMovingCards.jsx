"use client" 
import { useEffect, useState, useRef } from "react";
import { cn } from "../utils/cardLib";
import "../styles/infiniteCard.css";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle animation setup
  useEffect(() => {
    // Skip if refs aren't available
    if (!containerRef.current || !scrollerRef.current) return;

    // Clone the cards for continuous effect
    const scrollerChildren = Array.from(scrollerRef.current.children);
    scrollerChildren.forEach((child) => {
      const clone = child.cloneNode(true);
      scrollerRef.current.appendChild(clone);
    });

    // Set CSS variables for animation control
    const directionValue = direction === "left" ? "forwards" : "reverse";
    containerRef.current.style.setProperty(
      "--animation-direction",
      directionValue
    );

    const speedValue =
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
    containerRef.current.style.setProperty("--animation-duration", speedValue);

    // Start animation after short delay to allow DOM updates
    const timer = setTimeout(() => {
      setIsAnimating(true);
      console.log("Animation started:", true);
    }, 100);

    return () => clearTimeout(timer);
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        className
      )}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
      }}
    >
      <ul
        ref={scrollerRef}
        className={cn(

          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          isAnimating && "animate-scroll",
          pauseOnHover && "hover-pause"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={`${item.name}-${idx}`}
            className={cn(
              "w-[350px] max-w-full relative rounded-2xl flex-shrink-0 px-8 py-6 md:w-[450px]",
              "card"
            )}
          >
            <blockquote>
              <span
                className={cn(
                  "relative z-20 text-sm leading-[1.6] text-gray-100 font-normal",
                  "quote"
                )}
              >
                {item.quote}
              </span>
              <div
                className={cn(
                  "relative z-20 mt-6 flex flex-row items-center",
                  "author-info"
                )}
              >
                <span className="flex flex-col gap-1">
                  <span
                    className={cn(
                      "text-sm leading-[1.6] text-gray-400 font-normal",
                      "name"
                    )}
                  >
                    {item.name}
                  </span>
                  <span
                    className={cn(
                      "text-sm leading-[1.6] text-gray-500 font-normal",
                      "title"
                    )}
                  >
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
