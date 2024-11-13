import React from "react";

const Button = ({ text, handleBook, formData }) => {
  return (
    <div>
      <button
        onClick={() => handleBook(formData)}
        className="bg-button-green px-2 py-1 rounded-full hover:cursor-pointer w-[80%] hover:scale-105 duration-150 text-white font-bold"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
