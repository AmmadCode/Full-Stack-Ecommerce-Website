import React from "react";
import { Bars } from "react-loader-spinner";

const LoadingOverlay = ({ loading, message = "Processing..." }) => {
  if (!loading) return null;

  return (
    <div className="fixed bg-white inset-0 flex items-center justify-center z-50">
      <div className="rounded-lg p-8 flex flex-col items-center gap-4 shadow-xl">
        <Bars
          height="80"
          width="80"
          radius="9"
          color="#ec4899"
          ariaLabel="three-dots-loading"
          visible={true}
        />
        <p className="text-gray-700 font-semibold text-lg">{message}</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
