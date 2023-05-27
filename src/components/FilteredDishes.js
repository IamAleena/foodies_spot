import React, { useContext, useState, useEffect } from "react";
import CardDish from "./CardDish";
import Pagination from "./Pagination";
import { AllMenuContext } from "./AllMenuContext";

function FilteredDishes(props) {
  let [categories, setCategories] = useState([]);
  let [singleDish, setSingleDish] = useState([]);
  let allMenus = useContext(AllMenuContext);
  let [filteredDishes, setfilteredDishes] = useState([]);
  let [activeDish, setActiveDish] = useState("Beef");
  let [currentPage, setCurrentPage] = useState(1);
  let [itemsPerPage, setItemsPerPage] = useState(4);
  let indexOfLastDish = currentPage * itemsPerPage;
  let indexOfFirstDish = indexOfLastDish - itemsPerPage;
  let showTheseDishesNow = filteredDishes.slice(
    indexOfFirstDish,
    indexOfLastDish
  );

  async function getAllTheCategories() {
    const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const catogoryData = await response.json();
        setCategories(catogoryData.categories);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }

  async function getOnlyOneDish() {
    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const singleDishData = await response.json();
        setSingleDish(singleDishData.meals);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }

  useEffect(() => {
    getAllTheCategories();
    getOnlyOneDish();
  }, []);

  //lets show only single dishes
  let maxitem = 8;
  let singleDishItems = singleDish.map((item, index) => {
    if (index < maxitem) {
      return (
        <li>
          <img src={item.strMealThumb} className="br-10" alt="" />
          <h5>{item.strMeal}</h5>
        </li>
      );
    }
  });

  // Show dishes on click
  function showFilteredDishesHandler(category) {
    setSingleDish([]);
    setActiveDish(category);
    let filteredDishesAre = allMenus
      .filter((item) => {
        return item.strCategory === category;
      })
      .map((menuItem) => {
        return <CardDish menuItem={menuItem} />;
      });
    setfilteredDishes(filteredDishesAre);
  }

  //Lets show all the categories
  let allCategories = categories.map((item) => {
    return (
      <div
        // style={{
        //   backgroundColor: "#ffb902",
        //   color: "white",
        //   padding: "12px",
        //   // padding: 12 30,
        //   borderRadius: 30,
        //   marginRight: 20,
        //   marginBottom: 20,
        //   cursor: "pointer",
        //   fontWeight: "bold",
        //   "&.active": {
        //     backgroundColor: "black",
        //   },
        //   "&:hover": {
        //     backgroundColor: "black",
        //   },
        //   // transition: all ease 0.3s,
        // }}
        className={item.strCategory == activeDish ? "active" : ""}
        onClick={() => showFilteredDishesHandler(item.strCategory)}
      >
        {item.strCategory}
      </div>
    );
  });

  // Rendering
  return (
    <div className="filtered-dishes">
      <div className="container">
        <div className="text-center">
          <h2>Choose your dishes</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            odio ullam ad necessitatibus neque repudiandae ea architecto ipsum,
            repellat doloribus!
          </p>
        </div>
        <div className="filtered-dishes">
          <ul>{allCategories} </ul>
        </div>
        <div className="filtered-dishes-results">
          <ul className="flex flex-wrap gap-25">
            {singleDishItems}
            {/* or condition || */}
            {singleDishItems != 0 || filteredDishes.length != 0 ? (
              showTheseDishesNow
            ) : (
              <div className="alert">
                <h3>Sorry, No items found. </h3>
                <h4>Please try another dishes.</h4>
              </div>
            )}
          </ul>
        </div>
        <Pagination
          filteredDishes={filteredDishes}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default FilteredDishes;
