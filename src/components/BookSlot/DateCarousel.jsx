import React from "react";
import "./../../styles/DateCarousel.css";
import { extractDate } from "./helper";

const DateCarousel = ({ slots, handleDateSelection }) => {
  return (
    <div class="container">
      <div class="carousel-view">
        <button id="prev-btn" class="prev-btn">{"<-"}</button>

        {slots &&
          Object.keys(slots).map((slot) => {
            return (
              <div id="item-list" class="item-list" onClick={()=>handleDateSelection(slot)}>
                {extractDate(slot)}\
              </div>
            );
          })}

        <button id="next-btn" class="next-btn">{"->"}</button>
      </div>
    </div>
  );
};

export default DateCarousel;
