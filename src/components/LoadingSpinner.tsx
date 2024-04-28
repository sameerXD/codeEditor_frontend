import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col h-screen dark:invert bg-white justify-center items-center space-y-2 ">
        <span>Setting Up!</span>

      <div className="flex  space-x-2  ">
        <div
          className="h-8 w-8 bg-black rounded-full animate-bounce"
          style={{ animationDelay: "-0.3s" }}
        ></div>
        <div
          className="h-8 w-8 bg-black rounded-full animate-bounce"
          style={{ animationDelay: "-0.15s" }}
        ></div>
        <div className="h-8 w-8 bg-black rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
