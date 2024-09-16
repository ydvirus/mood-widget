export function extractDateAndDay(dateStr) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [year, month, day] = dateStr.split("/");
  const date = new Date(year, month - 1, day);
  const dayOfWeek = daysOfWeek[date.getDay()];
  return `${day} ${dayOfWeek}`;
}