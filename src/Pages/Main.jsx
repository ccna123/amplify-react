import React, { useState } from "react";
import departures from "../departure.json";
import arrivals from "../arrival.json";
import cabins from "../cabin.json";
import NavigationBar from "../components/NavigationBar";
import BottomNav from "../components/BottomNav";
import bottom_item from "../bottom_item.json";
import ReturnFlightBtn from "../components/ReturnFlightBtn";
import { Link } from "react-router-dom";

const Main = () => {
  const [formData, setformData] = useState({
    departure: departures[0]?.name || "",
    arrival: arrivals[0]?.name || "",
    cabin: cabins[0]?.name || "",
    date: "",
    travellers: 0,
  });

  const [isClicked, setIsClicked] = useState(null);
  const [isReturnFlight, setIsReturnFlight] = useState(false);

  const handleInputChange = (name, value) => {
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handleBook = () => {
    console.log(formData);
  };

  return (
    <section className="bg-white rounded-md md:w-[50%] w-full mx-auto">
      <div className="gap-3 flex flex-col px-4 pb-4 relative">
        <NavigationBar />
        <div className="flex gap-4 items-center">
          <p>Return flight</p>
          <input
            type="checkbox"
            className="size-4 accent-button-green"
            onClick={() => setIsReturnFlight(!isReturnFlight)}
          />
        </div>
        <div className="border border-gray-300 rounded-md flex justify-start flex-col px-4">
          <p className="text-start mb-2 text-gray-400">Departure</p>
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
        {isReturnFlight ? <ReturnFlightBtn /> : null}
        <div className="border border-gray-300 rounded-md flex justify-start flex-col px-4">
          <p className="text-start mb-2 text-gray-400">Arrival</p>
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
        <div className="border border-gray-300 rounded-md flex justify-start flex-col px-4">
          <p className="text-start mb-2 text-gray-400">Cabin</p>
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
        <div className="flex gap-2">
          <div className="border border-gray-300 rounded-md px-4 w-full">
            <p className="text-start mb-2 text-gray-400">Dates</p>
            <input
              type="date"
              className="text-black flex justify-start w-full focus:outline-none"
              name="date"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
          <div className="border border-gray-300 rounded-md justify-start px-4 w-full">
            <p className="text-start mb-2 text-gray-400">Travellers</p>
            <input
              type="number"
              className="focus:outline-none text-black flex justify-start"
              min={0}
              defaultValue={formData.travellers}
              name="travellers"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </div>
        <div>
          <button
            onClick={handleBook}
            className="bg-button-green px-2 py-1 rounded-full hover:cursor-pointer w-[80%] hover:scale-105 duration-150 text-white font-bold"
          >
            Book
          </button>
        </div>
      </div>
      <div className="flex justify-around bg-bottom-nav rounded-md p-2 hover:cursor-pointer">
        {bottom_item.map((item, index) => {
          return (
            <Link to={item.link} key={index}>
              <BottomNav
                icon={item.icon}
                name={item.name}
                key={index}
                isClicked={isClicked === item.id}
                onClick={() => {
                  setIsClicked(item.id);
                }}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Main;
