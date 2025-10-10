import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <span className="loading loading-spinner loading-xs"></span>
      <span className="loading loading-spinner loading-sm"></span>
      <span className="loading loading-spinner loading-md"></span>
      <span className="loading loading-spinner loading-lg"></span>
      <span className="loading loading-spinner loading-xl"></span>
    </div>
  );
};

export default Spinner;
