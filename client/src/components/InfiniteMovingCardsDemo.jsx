import { InfiniteMovingCards } from "./InfinityMovingCards";
import { contents } from "../Contents";
import ScrollFloat from "../assets/animations/ScrollFloat";
export function InfiniteMovingCardsDemo() {
  const { says } = contents;
  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];
  return (
    <div
      className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden mt-[130px]"
      // style={{
      //   background: "linear-gradient(to bottom, #000510, #001033)",
      //   backgroundImage: "radial-gradient(circle at 25% 25%, rgba(16, 21, 55, 0.8) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(16, 40, 80, 0.6) 0%, transparent 50%)"
      // }}
    >
      <div className="font-bold  md:mb-[-45px] md:ml-[-10px] text-center mb-[-30px] text-white ">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=50%"
          stagger={0.03}
        >
          {says.backgroundHeading}
        </ScrollFloat>
      </div>

      {/* Section Title */}
      <div className="flex flex-col justify-center items-center text-center text-3xl md:text-4xl sm:text-xl font-semibold  text-gray-400 ">
        <img className="mx-auto" src={says.underLine} alt="underline" />
        <h1>
          {`People's Say About Our`} <br /> Support & Services
        </h1>
      </div>

      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
