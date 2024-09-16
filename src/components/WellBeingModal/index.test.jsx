import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import WellbeingModal from ".";

test("triggers onContinue callback when continue button is clicked", () => {
  const onContinueMock = jest.fn();
  render(<WellbeingModal onContinue={onContinueMock} />);

  fireEvent.click(screen.getByText("Pretty Good"));

  fireEvent.click(screen.getByText("Continue"));

  expect(onContinueMock).toHaveBeenCalledTimes(1);
});

test("triggers onContinue callback when back button is clicked", () => {
  const onContinueMock = jest.fn();
  render(<WellbeingModal onContinue={onContinueMock} />);

  fireEvent.click(screen.getAllByRole("button")[0]);

  expect(onContinueMock).toHaveBeenCalledTimes(1);
});

test("triggers onContinue callback when cross button is clicked", () => {
  const onContinueMock = jest.fn();
  render(<WellbeingModal onContinue={onContinueMock} />);

  fireEvent.click(screen.getAllByRole("button")[1]);

  expect(onContinueMock).toHaveBeenCalledTimes(1);
});
