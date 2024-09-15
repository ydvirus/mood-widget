import React, { useEffect, useMemo, useState } from "react";
import slotsData from "../../data/slot.json";
import DateCarousel from "./DateCarousel";
import TimeChip from "./TimeChip";

const BookSlot = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [allSlots] = useState(JSON.parse(JSON.stringify(slotsData)));
  const allDatesAndTimeSlots = useMemo(() => {
    let dateTimeSlotsMap = new Map();
    allSlots.forEach((slot) => {
      if (dateTimeSlotsMap.has(slot.displayDate)) {
        let timeSlots = dateTimeSlotsMap.get(slot.displayDate);
        timeSlots.push(slot.displayTime);
        dateTimeSlotsMap.set(slot.displayDate, timeSlots);
      } else {
        dateTimeSlotsMap.set(slot.displayDate, [slot.displayTime]);
      }
    });
    return Object.fromEntries(dateTimeSlotsMap);
  }, [allSlots]);

  useEffect(() => {
    setSelectedDate(Object.keys(allDatesAndTimeSlots)[0]);
  }, []);

  const handleDateSelection = (slot) => {
    setSelectedDate(slot);
  };
  console.log("allSlots", allSlots, allDatesAndTimeSlots);
  return (
    <div className="container">
      <div className="section-1">
        <h2>Pick a date</h2>
        <DateCarousel
          slots={allDatesAndTimeSlots}
          handleDateSelection={handleDateSelection}
        />
      </div>

      <div className="section-2">
        <h2>Available time slots</h2>
        <p>Each section last for 30 minutes</p>
        <div className="time-chips">
          {selectedDate &&
            allDatesAndTimeSlots[selectedDate].map((timeSlot) => {
              return <TimeChip displayTimeSlot={timeSlot} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default BookSlot;
