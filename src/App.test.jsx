import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
import '@testing-library/jest-dom';


test("renders the app without crashing", () => {
  render(<App />);
  const tab1Element = screen.getByText(/Check-in widget/i);
  const tab2Element = screen.getByText(/Book timeslot/i);
  expect(tab1Element).toBeInTheDocument();
  expect(tab2Element).toBeInTheDocument();
});


test("defaults to tab1 being selected", () => {
  render(<App />);
  const welcomeHeading = screen.getByText(/Welcome Page/i);
  expect(welcomeHeading).toBeInTheDocument();
});


test("changes to tab2 when clicked", async () => {
  render(<App />);

  const tab2Element = screen.getByText(/Book timeslot/i);
  await waitFor(()=>{
      fireEvent.click(tab2Element);
  })
  
  
  const bookSlotComponent = screen.getByText(/Pick a date/i); 
  expect(bookSlotComponent).toBeInTheDocument();
});


test("opens the WellbeingModal when button is clicked", () => {
  render(<App />);
  
  
  const openModalButton = screen.getByText(/Open Wellbeing Modal/i);
  fireEvent.click(openModalButton);
  
  
  const modalComponent = screen.getByText(/Wellbeing Modal/i); 
  expect(modalComponent).toBeInTheDocument();
});


test("closes the WellbeingModal when onContinue is triggered", () => {
  render(<App />);
  
  
  const openModalButton = screen.getByText(/Open Wellbeing Modal/i);
  fireEvent.click(openModalButton);

  const modalComponent = screen.getByText(/Wellbeing Modal/i);
  expect(modalComponent).toBeInTheDocument();
  
  
  const continueButton = screen.getByText(/Continue/i); 
  fireEvent.click(continueButton);
  expect(screen.queryByTestId("wellbeing-modal")).not.toBeInTheDocument();
});
