import { Play } from "lucide-react";

const PlayButton = () => {
  return (
    <div className="flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-lg relative">
      {/* Outer glow effect */}
      <div className="absolute inset-0 w-full h-full bg-white rounded-full blur-3xl opacity-10"></div>
      
      {/* Play icon */}
      <Play size={30} strokeWidth={2} className="text-orange-500" />
    </div>
  );
};

export default PlayButton;
