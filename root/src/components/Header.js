import pizzeria_logo from "./../images/pizzeria-logo.png";

function Header(props) {
  let content = (
    <div>
      <div className="Header"></div>
      <div className="img">
        <img src={pizzeria_logo} />
      </div>
    </div>
  );

  return content;
}

export default Header;
