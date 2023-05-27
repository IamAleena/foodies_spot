import React, { useContext, useState } from "react";
import CardDish from "./CardDish";
import Popup from "./Popup";
import { AllMenuContext } from "./AllMenuContext";
import AddToCart from "./AddToCart";

function SpecialDishes(props) {
  let [showpopUp, setShowPopUp] = useState(false);
  let [currentDish, setCurrentDish] = useState();
  let [addToCartItem, setAddToCartItem] = useState([]);
  const allMenus = useContext(AllMenuContext);
  // console.log("This is add to cart item", addToCartItem)

  //function as a props
  function showPopupHandler(dishName) {
    setShowPopUp(true);
    setCurrentDish(dishName);
  }

  // lets close the popup
  function closePopupHandler() {
    setShowPopUp(false);
  }

  // Add to cart handler
  function addToCartHandler(addToCartImg, addToCartTitle) {
    // console.log("Add to cart now", addToCartImg, addToCartTitle);
    // setAddToCartItem(addToCartImg); //for single item
    setAddToCartItem(
      [
        ...addToCartItem,
        {
          "img" : addToCartImg,
          "title" : addToCartTitle
        }
      ]
    )
  }

  let maxSpecialDishes = 8;

  let specialMenus = allMenus.map((menuItem, index) => {
    if (index < maxSpecialDishes) {
      return <CardDish menuItem={menuItem} showPopup={showPopupHandler} />;
    }
  });

  return (
    <section className="special-dishes">
      {/* if show popup is true then show this */}
      {showpopUp && (
        <Popup
          closePopup={closePopupHandler}
          currentDish={currentDish}
          addToCartHandler={addToCartHandler}
        ></Popup>
      )}
      <div className="container">
        <AddToCart addToCartItem={addToCartItem} />
        <div className="special-dishes-content text-center">
          <h2>Our Special Dishes</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci,
            reiciendis quis veritatis amet a aliquam. Quae tempora quis tempore
            atque. Molestias nemo animi commodi unde?
          </p>
        </div>
        <div className="special-dishes-list">
          <ul className="flex flex-wrap gap-25 ">{specialMenus}</ul>
        </div>
      </div>
    </section>
  );
}
export default SpecialDishes;
