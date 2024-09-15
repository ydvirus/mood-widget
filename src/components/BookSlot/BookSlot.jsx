import React, { useEffect, useMemo, useState } from "react";
import slotsData from "../../data/slot.json";
import DateCarousel from "./DateCarousel/DateCarousel";
import TimeChip from "./TimeChip/TimeChip";
import './Bookslot.css';

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
    console.log("slot", slot);
    console.log(allDatesAndTimeSlots[selectedDate]);
    setSelectedDate(slot);
    setSelectedTime(null);
  };

  console.log(selectedTime,"selectedTime");
  return (
    <div className="bookslot-container">
      <div className="section-1">
        <h2>Pick a date</h2>
        <DateCarousel
          slots={allDatesAndTimeSlots}
          handleDateSelection={handleDateSelection}
          selectedDate={selectedDate}
        />
      </div>

      <div className="section-2">
        <h2>Available time slots</h2>
        <p>Each section last for 30 minutes</p>
        <div className="time-chips">
          {selectedDate &&
            allDatesAndTimeSlots[selectedDate].map((timeSlot) => {
              return <TimeChip displayTimeSlot={timeSlot} setSelectedTime={setSelectedTime} selectedTime={selectedTime} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default BookSlot;
