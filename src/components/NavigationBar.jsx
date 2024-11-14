import React from "react";
import { useLocation } from "react-router-dom";

const NavigationBar = ({ signOut, handleCancel }) => {
  const location = useLocation();

  const trip = localStorage.getItem("trip");

  return (
    <section className="px-2 py-1">
      <div className="w-full flex items-center justify-center gap-4">
        <img className="w-10 h-10" src="/airplane-ticket.png" alt="" />
        <div className="font-bold text-black">Flight Booking</div>
        <button
          onClick={() => signOut()}
          className="bg-button-green rounded-full text-white py-1 px-2 hover:scale-105 duration-150"
        >
          Sign out
        </button>
        {location.pathname === "/boarding" && trip && (
          <button
            onClick={handleCancel}
            className="bg-red-500 rounded-full text-white py-1 px-2 hover:scale-105 duration-150"
          >
            Cancel
          </button>
        )}
      </div>
    </section>
  );
};

export default NavigationBar;
