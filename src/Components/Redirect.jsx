import { useNavigate } from "react-router-dom";
function Redirect() {
  let navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/browse");
      }}
      className="wrapper redirect"
    >
      <div>
        <header>Click here</header>
        <header>to browse >></header>
        <header>more items</header>
      </div>
    </div>
  );
}
export default Redirect;
