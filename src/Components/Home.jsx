import Item from "./Item";
import { useState } from "react";
import Redirect from "./Redirect";
function Home() {
  let images = [
    "https://smartslider3.com/wp-content/uploads/2017/07/heroslider.png",
    "https://image.freepik.com/free-vector/branding-concept-landing-page_23-2148248237.jpg",
    "https://as2.ftcdn.net/v2/jpg/02/95/46/01/1000_F_295460169_l2eGApCy5gWlU8HUKTJDfGep9UulzMza.jpg"
  ];
  const [img, setImg] = useState(images[0]);
  const [sum, setSum] = useState(0);
  function back() {
    console.log(sum);
    setSum(Math.abs(sum - 1));
    setImg(images[sum % 3]);
    console.log(sum);
  }
  function front() {
    console.log(sum);
    setSum(Math.abs(sum + 1));
    setImg(images[sum % 3]);
    console.log(sum);
  }
  return (
    <div className="cont">
      <div className="hero">
        <img src={img} alt="hero" />
        <div className="sliders">
          <button onClick={back}>
            <i class="fas fa-arrow-left"></i>
          </button>
          <button onClick={front}>
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <div className="items">
        <header>Browse through our items:-</header>
        <div className="disp">
          <Item /> <Item /> <Item /> <Item /> <Redirect />
        </div>
      </div>
    </div>
  );
}
export default Home;
