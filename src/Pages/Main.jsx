import React, { useState, useTransition } from "react";
import departures from "../departure.json";
import arrivals from "../arrival.json";
import cabins from "../cabin.json";
import Button from "../components/Button";
import { API } from "aws-amplify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import notify from "../helper/notify";
import {
  calculateArrivalTime,
  calculateDuration,
  generateRandomTime,
} from "../helper/calculateTime";

const Main = ({ user }) => {
  const [formData, setformData] = useState({
    departure: departures[0]?.name || "",
    arrival: arrivals[0]?.name || "",
    cabin: cabins[0]?.name || "",
    date: "",
    travellers: 0,
    direction: "one-way",
  });

  const handleInputChange = (name, value) => {
    setformData({
      ...formData,
      [name]: value,
    });
  };

  function departureAirportDetail(departureAirportName) {
    return departures.find((airport) => airport.name === departureAirportName);
  }

  function arrivalAirportDetail(arrivalAirportName) {
    return arrivals.find((airport) => airport.name === arrivalAirportName);
  }

  const departureDetail = departureAirportDetail(formData.departure);
  const arrivalDetail = arrivalAirportDetail(formData.arrival);

  const handleBook = async (formData) => {
    const departureTime = generateRandomTime(); // Generate random departure time
    const durationInMinutes = 120; // Fixed duration of 2 hours
    const arrivalTime = calculateArrivalTime(departureTime, durationInMinutes); // Calculate arrival time
    const duration = calculateDuration(departureTime, arrivalTime); // Calculate duration

    const bookingDetail = {
      userId: user.username,
      flight_company: "FEA",
      flight_company_icon: "fa-solid fa-feather",
      flight_number: "FEA123",
      class: formData.cabin,
      departure: {
        airport: departureDetail.code,
        airport_full_name: formData.departure,
        city: departureDetail.city,
        country: departureDetail.country,
        date: formData.date,
        time: departureTime, // Use generated departure time
      },
      arrival: {
        airport: arrivalDetail.code,
        airport_full_name: formData.arrival,
        city: arrivalDetail.city,
        country: arrivalDetail.country,
        date: formData.date,
        time: arrivalTime, // Use calculated arrival time
      },
      duration: duration, // Use calculated duration
      travellers: formData.travellers,
      direction: formData.direction,
    };

    const response = API.post("myapi123", "/booking", {
      body: bookingDetail,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.statusCode === 201) {
          notify(response.message, "create");
          localStorage.setItem("trip", JSON.stringify(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section>
      <ToastContainer />
      <div className="gap-3 flex flex-col px-4 pb-4 relative">
        <div className="border border-gray-300 rounded-md flex justify-start flex-col px-4">
          <p className="text-start mb-2 text-gray-400 text-sm">Departure</p>
          <select
            className="mb-2 focus:outline-none"
            name="departure"
            id=""
            value={formData.departure}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          >
            {departures.map((d) => {
              return (
                <option key={d.id} value={d.name}>
                  {d.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="border border-gray-300 rounded-md flex justify-start flex-col px-4">
          <p className="text-start mb-2 text-gray-400 text-sm">Arrival</p>
          <select
            className="mb-2 focus:outline-none"
            name="arrival"
            id="arrival"
            value={formData.arrival}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          >
            {arrivals.map((a) => {
              return (
                <option key={a.id} value={a.name}>
                  {a.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-gray-300 rounded-md flex justify-start flex-col px-4">
            <p className="text-start mb-2 text-gray-400 text-sm">Cabin</p>
            <select
              className="mb-2 focus:outline-none"
              name="cabin"
              id=""
              value={formData.cabin}
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            >
              {cabins.map((cabin) => {
                return (
                  <option key={cabin.id} value={cabin.name}>
                    {cabin.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="border border-gray-300 rounded-md px-4">
            <p className="text-start mb-2 text-gray-400 text-sm">Dates</p>
            <input
              type="date"
              className="text-black flex justify-start w-full focus:outline-none"
              name="date"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-gray-300 rounded-md px-4 ">
            <p className="text-start mb-2 text-gray-400 text-sm">Travellers</p>
            <input
              type="number"
              className="focus:outline-none text-black w-full"
              min={0}
              defaultValue={formData.travellers}
              name="travellers"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
          <div className="border border-gray-300 rounded-md justify-start px-4">
            <div className="flex items-center justify-between">
              <label htmlFor="">One-way</label>
              <input
                type="radio"
                name="direction"
                checked={formData.direction === "one-way"}
                onChange={() => handleInputChange("direction", "one-way")}
                className="focus:outline-none text-black accent-button-green"
              />
            </div>
            <div className="flex items-center justify-between">
              <label htmlFor="">Two-way</label>
              <input
                type="radio"
                name="direction"
                checked={formData.direction === "two-way"}
                onChange={() => handleInputChange("direction", "two-way")}
                className="focus:outline-none text-black accent-button-green"
              />
            </div>
          </div>
        </div>
        <Button text="Book" handleBook={handleBook} formData={formData} />
      </div>
    </section>
  );
};

export default Main;
