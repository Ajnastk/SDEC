"use client";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../utils/cardLib";

const FlipWords = ({
  words = ['Tech', 'Creativity', 'Progress', 'Excellence'],
  duration = 3000,
  className
}) => {
  const [currentWord, setCurrentWord] = useState(words[0] || "");
  const [isAnimating, setIsAnimating] = useState(false);

  // thanks for the fix Julian - https://github.com/Julian-AT
  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation();
      }, duration);
  }, [isAnimating, duration, startAnimation]);

  return (
    <>
      <div className="flex flex-col text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight avro-font">
        <h1 className="text-slate-800 dark:text-white text-center sm:text-left">
          Building the Future
        </h1>
        <div className="flex flex-wrap items-center justify-center sm:justify-start">
          <span className="text-slate-800 dark:text-white mr-2 mt-3 sm:mt-5 md:mt-7">with</span>
          <span className="relative inline-block mt-3 sm:mt-5 md:mt-7">
            <AnimatePresence
              onExitComplete={() => {
                setIsAnimating(false);
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                exit={{
                  opacity: 0,
                  y: -40,
                  x: 40,
                  filter: "blur(8px)",
                  scale: 2,
                  position: "absolute",
                }}
                className={cn(
                  "z-10 inline-block relative text-left font-black text-white bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-500 dark:to-violet-500 px-2 py-1 rounded-md animated-word",
                  className
                )}
                key={currentWord}
              >
                {currentWord.split(" ").map((word, wordIndex) => (
                  <motion.span
                    key={word + wordIndex}
                    initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      delay: wordIndex * 0.3,
                      duration: 0.3,
                    }}
                    className="inline-block whitespace-nowrap"
                  >
                    {word.split("").map((letter, letterIndex) => (
                      <motion.span
                        key={word + letterIndex}
                        initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{
                          delay: wordIndex * 0.3 + letterIndex * 0.05,
                          duration: 0.2,
                        }}
                        className="inline-block"
                      >
                        {letter}
                      </motion.span>
                    ))}
                    <span className="inline-block">&nbsp;</span>
                  </motion.span>
                ))}
              </motion.div>
            </AnimatePresence>
          </span>
        </div>
      </div>
    </>
  );
};

export default FlipWords;