import { render, screen } from "@testing-library/react";
import DateBox from "./DateBox";
import * as helper from "../../../util/helper";

test("calls extractDateAndDay helper with the correct slotDate", () => {
  const mockSlotDate = "2024-09-16T00:00:00Z";

  const extractDateAndDayMock = jest.spyOn(helper, "extractDateAndDay");

  render(<DateBox slotDate={mockSlotDate} />);

  expect(extractDateAndDayMock).toHaveBeenCalledWith(mockSlotDate);
});
