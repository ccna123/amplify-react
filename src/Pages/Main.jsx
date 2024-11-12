import React, { useState } from "react";
import departures from "../departure.json";
import arrivals from "../arrival.json";
import cabins from "../cabin.json";
import Button from "../components/Button";

const Main = () => {
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

  const handleBook = () => {
    console.log(formData);
  };

  return (
    <section>
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
        <Button text="Book" handleBook={handleBook} />
      </div>
    </section>
  );
};

export default Main;
