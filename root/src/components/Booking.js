import React, { useState } from "react";
import DatePicker from "react-date-picker";
import Main from "./Main";

const Booking = ({ data, intro, setDisplayComponent }) => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [numberInput, setNumberInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const current = new Date();
  const year = `${current.getFullYear()}`;
  const month = `${current.getMonth() + 1}`;
  const day = `${current.getDate()}`;
  const hours = `${current.getHours()}`;
  const minutes = `:${current.getMinutes()}`;

  function confirmBooking() {
    // We can't book a table before the actual date
    // We can't book a table one hour before the actual time
    // Input format: 2022-01-19

    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (nameInput.length === 0) {
      setErrorMessage("Name required.");
    } else if (emailInput.length === 0) {
      setErrorMessage("Email required.");
    } else if (!emailInput.match(regex)) {
      setErrorMessage("Valid email required.");
    } else if (numberInput <= 0 && !isNaN(numberInput)) {
      setErrorMessage("Need more guests.");
    } else {
      setDisplayComponent(<Main data={data} intro={intro} />);
      setErrorMessage("All clear.");
    }
  }

  return (
    <div id="booking">
      <div id="forms-div">
        <form>
          <label>
            <div>Name:</div>
            <input
              type="text"
              name="name"
              id="name-input"
              onChange={(event) => setNameInput(event.target.value)}
            />
          </label>
        </form>
        <form>
          <label>
            <div>Email:</div>
            <input
              type="text"
              name="name"
              onChange={(event) => setEmailInput(event.target.value)}
            />
          </label>
        </form>
        <form>
          <label>
            <div>Date:</div>
            <input
              type="date"
              onChange={(event) => setDateInput(event.target.value)}
            />
          </label>
        </form>
        <form>
          <label>
            <div>Number of guests:</div>
            <input
              type="number"
              onChange={(event) => setNumberInput(event.target.value)}
            />
          </label>
        </form>
        <button id="booking-btn" onClick={confirmBooking}>
          Confirm booking
        </button>
        {errorMessage}
      </div>
    </div>
  );
};

export default Booking;
