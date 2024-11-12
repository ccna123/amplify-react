import React from "react";
import ForwardFlight from "./ForwardFlight";
import ReturnFlight from "./ReturnFlight";

const TripCard = ({ trip }) => {
  return (
    <div className="rounded-md w-full">
      <div className="px-3 py-1">
        <ForwardFlight trip={trip} />
        <ReturnFlight trip={trip} />
        <div className="font-bold text-2xl flex justify-end">
          <p>${trip.price}</p>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
