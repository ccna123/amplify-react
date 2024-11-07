import React from "react";
import TripCard from "../components/TripCard";
import trip from "../trip.json";

const Trips = () => {
  return (
    <section className="bg-white rounded-md md:w-[50%] w-full mx-auto">
      <TripCard trip={trip} />
    </section>
  );
};

export default Trips;
