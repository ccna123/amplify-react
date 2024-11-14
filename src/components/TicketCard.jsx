import React from "react";

const TicketCard = ({ trip }) => {
  return (
    <div className="text-white">
      <div className="bg-ticket-color rounded-lg mx-4 my-2 p-3 ">
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
          <div className="flex items-start flex-col">
            <p className="text-3xl">{trip.departure.airport}</p>
            <p className="text-sm text-gray-400">
              {trip.departure.airport_full_name}
            </p>
            <p className="text-sm">
              {trip.departure.time} | {trip.departure.date}
            </p>
          </div>
          <div className="w-fit mx-auto flex items-center">
            {trip.direction === "one-way" ? (
              <i className="fa-solid fa-arrow-down text-3xl" />
            ) : (
              <i className="fa-solid fa-arrows-up-down text-3xl" />
            )}
            <p className="text-sm ml-2">{trip.duration}</p>
          </div>
          <div className="flex items-start flex-col">
            <p className="text-3xl">{trip.arrival.airport}</p>
            <p className="text-sm text-gray-400">
              {trip.arrival.airport_full_name}
            </p>
            <p className="text-sm">
              {trip.arrival.time} | {trip.arrival.date}
            </p>
          </div>
          <hr className="border-1 border-dashed border-white my-4" />
          <div className="grid grid-cols-5">
            <div className="border-gray-600 border-r-2">
              <p>Seat</p>
              <p className="text-sm text-gray-500">{trip.seat}</p>
            </div>
            <div className="border-gray-600 border-r-2">
              <p>Terminal</p>
              <p className="text-sm text-gray-500">{trip.terminal}</p>
            </div>
            <div className="border-gray-600 border-r-2">
              <p>Flight</p>
              <p className="text-sm text-gray-500">{trip.flight_number}</p>
            </div>
            <div className="border-gray-600 border-r-2">
              <p>Gate</p>
              <p className="text-sm text-gray-500">{trip.gate}</p>
            </div>
            <div>
              <p>Travellers</p>
              <p className="text-sm text-gray-500">{trip.travellers}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TicketCard;
