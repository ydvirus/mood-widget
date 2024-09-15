import React, { useRef } from "react";
import "./../../styles/DateCarousel.css";
import DateBox from "./DateBox";

const DateCarousel = ({ slots, handleDateSelection, selectedDate }) => {
  const carouselContainer = useRef(null);
  const scrollCarousel = (direction) => {
    if (direction === "left") {
      carouselContainer.current.scrollLeft -= 40;
    }
    if (direction === "right") {
      carouselContainer.current.scrollLeft += 40;
    }
  };
  return (
    <div class="date-carousel-container">
      <button
        id="prev-btn"
        class="prev-btn"
        onClick={() => scrollCarousel("left")}
      >
        {"<-"}
      </button>
      <div id="carousel-view-id" class="carousel-view" ref={carouselContainer}>
        {slots &&
          Object.keys(slots).map((slot) => {
            return (
              <div
                key={slot}
                class={`item-list${selectedDate === slot ? " active" : ""}`}
                onClick={() => handleDateSelection(slot)}
              >
                {<DateBox slotDate={slot} />}
              </div>
            );
          })}
      </div>
      <button
        id="next-btn"
        class="next-btn"
        onClick={() => scrollCarousel("right")}
      >
        {"->"}
      </button>
    </div>
  );
};

export default DateCarousel;
