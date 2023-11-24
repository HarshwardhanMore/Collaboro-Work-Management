import React from "react";

const LoadingComponent = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      {/* Loading ... */}

      <img
        src="/loader/loading-awesome.gif"
        alt="Loading ..."
        className=" w-[5vw] aspect-square"
      />
    </div>
  );
};

export default LoadingComponent;
