import { render, screen, fireEvent } from "@testing-library/react";
import TimeChip from ".";

test("applies 'active' class when the time slot is selected", () => {
  const timeSlot = "10:00 AM";
  render(
    <TimeChip
      displayTimeSlot={timeSlot}
      setSelectedTime={jest.fn()}
      selectedTime={timeSlot}
    />
  );

  const timeChip = screen.getByText(timeSlot);

  expect(timeChip.classList).toContain("active");
});

test("does not apply 'active' class when the time slot is not selected", () => {
  const timeSlot = "10:00 AM";
  const selectedTime = "11:00 AM";
  render(
    <TimeChip
      displayTimeSlot={timeSlot}
      setSelectedTime={jest.fn()}
      selectedTime={selectedTime}
    />
  );

  const timeChip = screen.getByText(timeSlot);

  expect(timeChip.classList).not.toContain("active");
});

test("calls setSelectedTime with the correct time slot when clicked", () => {
  const timeSlot = "10:00 AM";
  const setSelectedTimeMock = jest.fn();
  render(
    <TimeChip
      displayTimeSlot={timeSlot}
      setSelectedTime={setSelectedTimeMock}
      selectedTime={""}
    />
  );

  const timeChip = screen.getByText(timeSlot);

  fireEvent.click(timeChip);

  expect(setSelectedTimeMock).toHaveBeenCalledWith(timeSlot);
});
