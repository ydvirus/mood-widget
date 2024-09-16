import React from "react";
import { extractDateAndDay } from "../../../util/helper";

const DateBox = ({ slotDate }) => {
  return <div className="date-box">{extractDateAndDay(slotDate).split(" ").map(word => word+"\n")}</div>;
};

export default DateBox;
