import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SearchComponent = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchedMeal, setSearchedMeal] = useState(null);
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${searchValue}`,
        {
          headers: {
            "X-Api-Key": "bf87a73a3a0340809615a94428f5d432",
          },
        }
      );

      const firstResult = response.data.results[0];

      if (firstResult) {
        setSearchedMeal(firstResult);
        // Use navigate to navigate to the searched meal route
        navigate(`/searched-meal/${firstResult.id}`);
      } else {
        // If no results, navigate to the not found page
        navigate("/notfound");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mb-6 mt-7">
      <div className="mb-4 flex flex-wrap justify-center">
        <form onSubmit={handleOnSubmit} className="flex items-center">
          <input
            type="text"
            name="search"
            className="bg-neutral-500 h-12 px-4 rounded-3xl focus:outline-none w-96"
            placeholder="Search"
          />
          <button
            className=" ml-2 rounded-3xl relative z-[2] bg-primary px-6 py-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 bg-black active:shadow-lg "
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      {searchedMeal && (
        <div>
          <Link to={`/searched-meal/${searchedMeal.id}`}>View Details</Link>
          <h2>{searchedMeal.title}</h2>
          <img src={searchedMeal.image} alt={searchedMeal.title} />
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
