import React, { useEffect, useState } from "react";
import TicketCard from "../components/TicketCard";
import { API } from "aws-amplify";

const BoardingPass = ({ user }) => {
  const [trip, setTrip] = useState({});

  const fetchBooking = async () => {
    console.log("hahahah");

    try {
      const response = await API.get(
        "myapi123",
        `/booking?userId=${user.username}`
      );
      setTrip(JSON.parse(response.details));

      localStorage.setItem("trip", response.details);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const storedTrip = localStorage.getItem("trip");
    if (storedTrip) {
      try {
        const parsedTrip = JSON.parse(storedTrip);
        setTrip(parsedTrip);
        console.log("Trip from local storage:", parsedTrip);
      } catch (error) {
        console.log("Error parsing stored trip:", error);
      }
    } else {
      fetchBooking();
    }
    return () => {
      localStorage.removeItem("trip");
    };
  }, []);

  return (
    <div>{Object.keys(trip).length > 0 && <TicketCard trip={trip} />}</div>
  );
};

export default BoardingPass;
