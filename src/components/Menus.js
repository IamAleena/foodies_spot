import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FilteredDishes from "./FilteredDishes";
import Hero from "./Hero.jsx";
import Header from "./Header";
import SpecialDishes from "./SpecialDishes";
import { AllMenus } from "./AllMenuContext";
import Checkout from "./Checkout";

function Menus() {
  return (
    <div>
      <Router>
        <Header />
        <Hero />
        <Switch>
          <Route exact path="/">
            <AllMenus>
              <SpecialDishes />
              <FilteredDishes />
            </AllMenus>
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Menus;
