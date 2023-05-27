import React, { useContext } from "react";
import { AllMenuContext } from "./AllMenuContext";

function Popup({ closePopup, currentDish, allDishes,addToCartHandler }) {

  const allMenus = useContext(AllMenuContext);

  let dishDetails = allMenus
    .filter((menuItem) => {
      return menuItem.strMeal == currentDish;
    })
    .map((item) => {
      return (
        <div className="popup-content-data">
          <div className="popup-header">
            <img src={item.strMealThumb} />
            <h5 className="popup-header-category">{item.strCategory}</h5>
          </div>
          <h2>{item.strMeal}</h2>
          <p>{item.strInstructions}</p>
          <ul className="dish-ingredients">
            <li className="list-ing">{item.strIngredient1}</li>
            <li className="list-ing">{item.strIngredient2}</li>
            <li className="list-ing">{item.strIngredient3}</li>
            <li className="list-ing">{item.strIngredient4}</li>
          </ul>
          <button onClick={()=>addToCartHandler(item.strMealThumb,item.strMeal)}>Order Now</button>
          <h5 className="popup-close" onClick={closePopup}>
            Close
          </h5>
        </div>
      );
    });
  return (
    <div className="popup">
      <div className="popup-content">{dishDetails}</div>
    </div>
  );
}

export default Popup;
