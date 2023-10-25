// Veggies.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import ButtonComponent from "./ButtonComponent";

const Veggies = () => {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const check = localStorage.getItem("veggie");
      if (check) {
        setVeggie(JSON.parse(check));
      } else {
        const url =
          "https://api.spoonacular.com/recipes/random?number=3&tags=vegetarian";
        try {
          const response = await axios.get(url, {
            headers: {
              "X-Api-Key": "bf87a73a3a0340809615a94428f5d432",
            },
          });
          setVeggie(response.data.recipes);
          localStorage.setItem("veggie", JSON.stringify(response.data.recipes));
          console.log(response.data.recipes);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div className="text-center mx-auto  w-9/12 pb-20">
      <h3 className="pb-4 mt-5 text-3xl ">Vegetarian</h3>
      <div className="grid grid-cols-3 gap-5">
        {veggie.map((item, index) => (
          <div
            key={item.id}
            className={
              "p-8 bg-neutral-300 rounded-3xl text-center  aspect-video"
            }
          >
            <img
              className="rounded-lg object-co ver h-56 w-full mb-4"
              src={item.image}
              alt={item.title}
            />
            <h5 className="text-2xl font-semibold">{item.title}</h5>
            <ButtonComponent
              itemId={item.id}
              buttonText="Details"
              // Add Tailwind CSS classes for styling the button
              className="bg-primary text-white px-4 py-2 rounded-full mt-4 hover:bg-primary-dark"
            ></ButtonComponent>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Veggies;
