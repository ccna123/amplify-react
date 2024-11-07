import React from "react";

const BottomNav = ({ icon, name, isClicked, onClick }) => {
  return (
    <div onClick={onClick} className="">
      <i
        className={`${icon} ${
          isClicked ? "bg-icon-green rounded-full p-1 w-16 text-green-300" : ""
        }`}
      ></i>
      <p className={isClicked ? `font-bold` : ""}>{name}</p>
    </div>
  );
};

export default BottomNav;
