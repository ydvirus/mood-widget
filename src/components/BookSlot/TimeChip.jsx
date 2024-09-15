import React from 'react'

const TimeChip = ({displayTimeSlot,setSelectedTime, selectedTime }) => {
  return (
    <div className={`time-chip${selectedTime === displayTimeSlot ? " active": ""}`} onClick={()=>setSelectedTime(displayTimeSlot)} >{displayTimeSlot}</div>
  )
}

export default TimeChip