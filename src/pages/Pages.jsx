// Pages.js
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Cuisine from "./Cuisine";
import SingleMeal from "../components/SingleMeal";
import SearchComponent from "../components/SearchComponent";
import NotFound from "./NotFound";

const Pages = () => {
  return (
    <div>
      <Routes>
        {/* Create a new route for rendering the single meal */}
        <Route path="/searched-meal/:id" element={<SingleMeal />} />

        {/* Use SearchComponent only as a route element */}
        <Route path="/search/:s" element={<SearchComponent />} />

        {/* Create a new route for rendering the single meal in cuisine */}
        <Route path="/cuisine/:type/meal/:id" element={<SingleMeal />} />

        {/* Other routes */}
        <Route path="/meal/:id" element={<SingleMeal />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/" element={<Home />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Pages;
