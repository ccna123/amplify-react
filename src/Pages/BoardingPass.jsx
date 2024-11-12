import React from "react";
import TicketCard from "../components/TicketCard";
import trip from "../trip.json";

const BoardingPass = () => {
  return (
    <div>
      <TicketCard trip={trip} />
    </div>
  );
};

export default BoardingPass;
