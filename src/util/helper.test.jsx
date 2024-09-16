import { extractDateAndDay } from "./helper";

test("extracts date and day correctly from a valid date string", () => {
  const dateStr = "2024/09/16";
  const result = extractDateAndDay(dateStr);

  expect(result).toBe("16 Mon");
});

test("handles leap year correctly", () => {
  const leapYearDate = "2024/02/29";
  const result = extractDateAndDay(leapYearDate);

  expect(result).toBe("29 Thu");
});

test("correctly extracts date and day when day is single-digit", () => {
  const dateStr = "2024/09/05";
  const result = extractDateAndDay(dateStr);

  expect(result).toBe("05 Thu");
});

