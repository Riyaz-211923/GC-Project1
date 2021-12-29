import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar(props) {
  const [cond, setCond] = useState("none");
  function toggler() {
    let bar = document.getElementById("infobar").style.display;
    if (bar === "block") {
      setCond("none");
      document
        .getElementById("icon")
        .classList.replace("fa-window-close", "fa-bars");
    } else {
      setCond("block");
      document
        .getElementById("icon")
        .classList.replace("fa-bars", "fa-window-close");
    }
  }
  return (
    <div className="container">
      <div className="navbar">
        <Link to="/">
          <a href="/">
            <i class="fas fa-home"></i>
            <span>Shop</span>
          </a>
        </Link>
        <div className="contents">
          <Link to="/browse">
            <a className="title" href="/browse">
              <i class="fas fa-search"></i>
              <span>Browse</span>
            </a>
          </Link>
          <Link to="/sell">
            <a className="title" href="/sell">
              <i class="fas fa-dollar-sign"></i>
              <span>Sell</span>
            </a>
          </Link>
          <button onClick={toggler}>
            <i id="icon" className="fas fa-bars title"></i>
          </button>
        </div>
      </div>
      <div style={{ display: cond }} id="infobar" className="infobar">
        <i class="fas fa-user profile"></i>
        <h2 className="name">Riyaz Syed</h2>
        <h2 className="mail">211923@student.nitandhra.ac.in</h2>
        <button>Logout</button>
      </div>
    </div>
  );
}
export default Navbar;
