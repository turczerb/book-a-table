import "./App.css";
import Header from "./components/Header";
import data from "./data";
import introData from "./introData";
import Main from "./components/Main";
import React, { useState } from "react";
import Booking from "./components/Booking";

function App() {
  const [displayComponent, setDisplayComponent] = useState(
    <Main data={data} intro={introData} showBooking={showBooking} />
  );

  function showBooking() {
    setDisplayComponent(
      <Booking
        data={data}
        intro={introData}
        setDisplayComponent={setDisplayComponent}
      />
    );
  }
  return (
    <div className="App">
      <Header />
      {displayComponent}
    </div>
  );
}

export default App;
