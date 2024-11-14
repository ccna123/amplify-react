import React, { useEffect, useState } from "react";
import TicketCard from "../components/TicketCard";
import { API } from "aws-amplify";

const BoardingPass = ({ user }) => {
  const [trip, setTrip] = useState(null);

  const fetchBooking = async () => {
    try {
      const response = await API.get(
        "myapi123",
        `/booking?userId=${user.username}`
      );
      if (response.statusCode !== 404) {
        setTrip(JSON.parse(response.details));
      }
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  useEffect(() => {
    const storedTrip = localStorage.getItem("trip");
    if (storedTrip) {
      try {
        const parsedTrip = JSON.parse(storedTrip);
        setTrip(parsedTrip);
      } catch (error) {
        console.log("Error parsing stored trip:", error);
      }
    } else {
      fetchBooking();
    }
  }, []);

  return (
    <div>
      {trip && Object.keys(trip).length > 0 ? (
        <TicketCard trip={trip} />
      ) : (
        <p className="font-bold my-3">No booking found</p>
      )}
    </div>
  );
};

export default BoardingPass;
