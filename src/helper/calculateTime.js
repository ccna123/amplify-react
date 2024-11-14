const generateRandomTime = () => {
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

export { generateRandomTime, calculateArrivalTime, calculateDuration };
