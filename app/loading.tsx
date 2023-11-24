"use client";
import LoadingComponent from "@/components/custom/LoadingComponent";

const Loading = () => {
  return (
    <div className="w-full h-full">
      <LoadingComponent />
    </div>
    // <div className=" w-full h-full flex items-center justify-center">
    //   <img src="/loader/loading.gif" alt="Loading..." />
    // </div>
  );
};

export default Loading;
