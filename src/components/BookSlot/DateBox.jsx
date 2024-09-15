import React from "react";
import { extractDateAndDay } from "./helper";

const DateBox = ({ slotDate }) => {
  return <div className="date-box">{extractDateAndDay(slotDate)}</div>;
};

export default DateBox;
