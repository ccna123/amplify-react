import React from "react";

const NavigationBar = () => {
  return (
    <section className="px-2 py-1">
      <div className="w-full flex items-center justify-between">
        <img className="w-10 h-10" src="/airplane-ticket.png" alt="" />
        <div className="font-bold text-black">Flight Booking</div>
        <div className="bg-gray-200 flex justify-between items-center rounded-full py-1 pl-2">
          <input
            type="text"
            className="focus:outline-none bg-transparent placeholder:text-black"
            placeholder="Search flight..."
          />
          <i className="text-black fa-solid fa-magnifying-glass w-12 hover:cursor-pointer"></i>
        </div>
      </div>
    </section>
  );
};

export default NavigationBar;
