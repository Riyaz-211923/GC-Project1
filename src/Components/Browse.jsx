import Item from "./Item";
function Browse() {
  return (
    <div className="items">
      <header>All Items:-</header>
      <div className="browse">
        <div className="disp">
          <Item /> <Item /> <Item /> <Item /> <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  );
}
export default Browse;
