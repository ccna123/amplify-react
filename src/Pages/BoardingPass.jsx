import React from "react";
import Button from "../components/Button";
import TicketCard from "../components/TicketCard";
import trip from "../trip.json";

const BoardingPass = () => {
  return (
    <div>
      <TicketCard trip={trip} />
      <Button text="Download pass" />
    </div>
  );
};

export default BoardingPass;
