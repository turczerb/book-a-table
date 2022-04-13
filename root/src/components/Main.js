import Menu from "./Menu";
import Introduction from "./Introduction";
//import data from "./data";
//import introData from "./introData";
import Booking from "./Booking";

function Main(props) {
  return (
    <div id="site-container">
      <div id="introduction-container">
        <Introduction intro={props.intro} />
      </div>
      <div id="menu-container">
        {props.data.map((menu) => {
          return (
            <Menu name={menu.name} topping={menu.topping} price={menu.price} />
          );
        })}
      </div>
      <div id="booking-btn" onClick={props.showBooking}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>Book a table
      </div>
    </div>
  );
}

export default Main;
