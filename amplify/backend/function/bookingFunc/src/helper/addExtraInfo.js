const generateRandomTime = () => {
  console.log("hahahha");

  const startHour = 6; // 6 AM
  const endHour = 22; // 10 PM
  const randomHour =
    Math.floor(Math.random() * (endHour - startHour + 1)) + startHour;
  const randomMinute = Math.floor(Math.random() * 60);
  return `${randomHour.toString().padStart(2, "0")}:${randomMinute
    .toString()
    .padStart(2, "0")}`;
};

const calculateArrivalTime = (departureTime, duration) => {
  const [hours, minutes] = departureTime.split(":").map(Number);
  const totalMinutes = hours * 60 + minutes + duration; // Add duration in minutes
  const arrivalHours = Math.floor(totalMinutes / 60) % 24; // Wrap around after 24 hours
  const arrivalMinutes = totalMinutes % 60;
  return `${arrivalHours.toString().padStart(2, "0")}:${arrivalMinutes
    .toString()
    .padStart(2, "0")}`;
};

const calculateDuration = (departureTime, arrivalTime) => {
  const [depHours, depMinutes] = departureTime.split(":").map(Number);
  const [arrHours, arrMinutes] = arrivalTime.split(":").map(Number);

  const depTotalMinutes = depHours * 60 + depMinutes;
  const arrTotalMinutes = arrHours * 60 + arrMinutes;

  // Calculate duration in minutes
  let durationInMinutes = arrTotalMinutes - depTotalMinutes;
  if (durationInMinutes < 0) {
    durationInMinutes += 24 * 60; // Adjust for overnight flights
  }

  const durationHours = Math.floor(durationInMinutes / 60);
  const durationRemainingMinutes = durationInMinutes % 60;

  return `${durationHours} hours ${durationRemainingMinutes} minutes`;
};

function getRandomSeat() {
  const seats = ["A", "B", "C", "D", "E"]; // seat sections
  const row = Math.floor(Math.random() * 30) + 1; // random row between 1 and 30
  const seat = seats[Math.floor(Math.random() * seats.length)]; // randomly select a section
  return `${seat}${row}`;
}

// Function to generate a random terminal
function getRandomTerminal() {
  const terminals = ["Terminal 1", "Terminal 2", "Terminal 3"]; // list of terminals
  return terminals[Math.floor(Math.random() * terminals.length)];
}

// Function to generate a random gate, like A1, B15, etc.
function getRandomGate() {
  const gates = ["A", "B", "C", "D", "E"]; // gate sections
  const gate = Math.floor(Math.random() * 20) + 1; // gate number between 1 and 20
  const section = gates[Math.floor(Math.random() * gates.length)]; // randomly select section
  return `${section}${gate}`;
}

function getRandomPrice() {
  return (Math.random() * (500 - 100) + 100).toFixed(2); // generates price between 100 and 500, rounded to 2 decimals
}

export {
  generateRandomTime,
  calculateArrivalTime,
  calculateDuration,
  getRandomSeat,
  getRandomTerminal,
  getRandomGate,
  getRandomPrice,
};
