function Menu(props) {
  return (
    <div className="menu">
      <h2>{props.name}</h2>
      <p>{props.topping}</p>
      <p>{props.price},-</p>
    </div>
  );
}

export default Menu;
