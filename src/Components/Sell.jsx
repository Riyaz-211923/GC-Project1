function Sell() {
  return (
    <div className="sell">
      <div className="sell-form">
        <form>
          <fieldset>
            <legend>Seller Information</legend>

            <label id="name-label">
              <h3>Name:</h3>
              <label for="name">
                <input placeholder="Enter your name" id="name" required />
              </label>
            </label>

            <label id="email-label">
              <h3>Email:</h3>
              <label for="email">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  id="email"
                  required
                />
              </label>
            </label>

            <label id="name-label">
              <h3>Item:</h3>
              <label for="item">
                <input placeholder="Enter your Item" id="item" required />
              </label>
            </label>

            <h3>Item Description:</h3>
            <textarea placeholder="Type here..."></textarea>

            <label id="name-label">
              <h3>Price:</h3>
              <label for="price">
                <input
                  type="number"
                  placeholder="Enter your Item's price"
                  id="price"
                  required
                />
              </label>
            </label>

            <label id="name-label">
              <h3>Phone Number:</h3>
              <label for="number">
                <input
                  type="number"
                  placeholder="Enter your Item's price"
                  id="number"
                  required
                />
              </label>
            </label>

            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
export default Sell;
