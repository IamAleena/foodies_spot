//Global context

import React, { useState, useEffect } from "react";
import Loader from "./Loader";

// Create a global context that can be shared to its children and it is a 'Named export's
export const AllMenuContext = React.createContext();

export const AllMenus = (props) => {
  let [menu, setMenu] = useState([]);
  let [loading, setLoading] = useState(true);

  // Get all the menus
  async function getAllTheMenus() {
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setMenu(json.meals);
        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }

  useEffect(() => {
    getAllTheMenus();
  }, []);

  return (
    <AllMenuContext.Provider value={menu}>
      {!loading ? props.children : <Loader />}
    </AllMenuContext.Provider>
  );
};
