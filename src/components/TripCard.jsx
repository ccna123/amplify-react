import React from "react";

const TripCard = ({ trip }) => {
  return (
    <div>
      <div>123</div>
      <div className="p-3">
        <section className="flex justify-between">
          <div>
            <i className={`${trip.flight_company_icon} mr-2`} />
            {trip.flight_company}
          </div>
          <div className="rounded-full bg-class-color text-white px-2 font-bold">
            {trip.class}
          </div>
        </section>
        <section className="flex justify-between border-2 border-red-400 mt-2">
          <div>
            <p className="text-xl">{trip.departure_time}</p>
            <p className="text-sm text-gray-500">{trip.departure_airport}</p>
          </div>
          <div className="text-xs text-gray-500">{trip.duration}</div>
          <div>
            <p className="text-xl">{trip.arrival_time}</p>
            <p className="text-sm text-gray-500">{trip.arrival_airport}</p>
          </div>
        </section>
        <section className="flex justify-between">
          <div>{trip.price}</div>
          <div>{trip.flight_number}</div>
        </section>
      </div>
    </div>
  );
};

export default TripCard;
