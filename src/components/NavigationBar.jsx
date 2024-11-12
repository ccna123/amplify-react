import React from "react";

const NavigationBar = () => {
  return (
    <section className="px-2 py-1">
      <div className="w-full flex items-center justify-center gap-4">
        <img className="w-10 h-10" src="/airplane-ticket.png" alt="" />
        <div className="font-bold text-black">Flight Booking</div>
      </div>
    </section>
  );
};

export default NavigationBar;
