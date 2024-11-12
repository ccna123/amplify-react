import React from "react";
import TripCard from "../components/TripCard";
import trip from "../trip.json";

const Trips = () => {
  return (
    <section>
      <TripCard trip={trip} />
    </section>
  );
};

export default Trips;
