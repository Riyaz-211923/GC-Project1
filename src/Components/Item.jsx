import { useNavigate } from "react-router-dom";
function Item() {
  let navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/item");
      }}
      className="wrapper"
    >
      <img
        src="https://m.media-amazon.com/images/I/41UD9vNsIjS.jpg"
        alt="watch"
      />
      <div className="item-description">
        <header>Noise ColorFit Pro 2 </header>
      </div>
    </div>
  );
}
export default Item;
