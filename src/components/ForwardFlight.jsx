import React from "react";

const ForwardFlight = ({ trip }) => {
  return (
    <div className="rounded-md mb-2 p-3 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
      <section className="flex justify-between">
        <div>
          <i className={`${trip.flight_company_icon} mr-2`} />
          {trip.flight_company}
        </div>
        <div className="rounded-full bg-class-color text-white px-2 font-bold">
          {trip.class}
        </div>
      </section>
      <section className="flex justify-between mt-2">
        <div>
          <p className="text-xl">{trip.departure.time}</p>
          <p className="text-sm text-gray-500">{trip.departure.airport}</p>
        </div>
        <div className="text-xs text-gray-500">{trip.duration}</div>
        <div>
          <p className="text-xl">{trip.arrival.time}</p>
          <p className="text-sm text-gray-500">{trip.arrival.airport}</p>
        </div>
      </section>
      <section className="flex items-center justify-center">
        <hr className="w-full border-button-green border-1` mr-2" />
        <i className="fa-solid fa-plane text-xl text-button-green" />
        <hr className="w-full border-button-green border-1` ml-2" />
      </section>
      <section className="flex justify-between">
        <div className="text-gray-500">{trip.flight_number}</div>
      </section>
    </div>
  );
};

export default ForwardFlight;
