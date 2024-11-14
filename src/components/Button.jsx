import React from "react";

const Button = ({ text, handleBook, formData }) => {
  return (
    <div
      onClick={() => handleBook(formData)}
      className="mx-auto bg-button-green rounded-full hover:cursor-pointer w-[80%] hover:scale-105 duration-150 text-white "
    >
      <button className="px-2 py-1 font-bold flex items-center gap-3 mx-auto">
        {text}
      </button>
    </div>
  );
};

export default Button;
