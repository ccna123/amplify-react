import React from "react";

const Button = ({ text, handleBook }) => {
  return (
    <div>
      <button
        onClick={handleBook}
        className="bg-button-green px-2 py-2 rounded-full hover:cursor-pointer w-[80%] hover:scale-105 duration-150 text-white font-bold"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
