import React from "react";

const TicketCard = ({ trip }) => {
  return (
    <div className="bg-ticket-color rounded-lg mx-4 my-2 p-3 text-white">
      <section className="flex justify-between">
        <div>
          <i className={`${trip.flight_company_icon} mr-2`} />
          {trip.flight_company}
        </div>
        <div className="rounded-full bg-class-color text-white px-2 font-bold">
          {trip.class}
        </div>
      </section>
      <section>
        <div className="border-2 border-red-500 flex items-start flex-col">
          <p className="text-3xl">{trip.departure.airport}</p>
          <p className="text-sm text-gray-400">
            {trip.departure.airport_full_name}
          </p>
          <p className="text-sm">
            {trip.departure.time} | {trip.departure.date}
          </p>
        </div>
        <i className="fa-solid fa-arrows-up-down" />
        <div className="border-2 border-red-500 flex items-start flex-col">
          <p className="text-3xl">{trip.arrival.airport}</p>
          <p className="text-sm text-gray-400">
            {trip.arrival.airport_full_name}
          </p>
          <p className="text-sm">
            {trip.arrival.time} | {trip.arrival.date}
          </p>
        </div>
        <hr className="border-1 border-dashed border-white my-4" />
        <div className="grid grid-cols-4">
          <div>
            <p>Seat</p>
            <p>{trip.seat}</p>
          </div>
          <div>
            <p>Terminal</p>
            <p>{trip.terminal}</p>
          </div>
          <div>
            <p>Flight</p>
            <p>{trip.flight_number}</p>
          </div>
          <div>
            <p>Gate</p>
            <p>{trip.gate}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TicketCard;
