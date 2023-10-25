import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ButtonComponent from "../components/ButtonComponent";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  useEffect(() => {
    const fetchCuisine = async () => {
      const url = `https://api.spoonacular.com/recipes/complexSearch?number=6&cuisine=${params.type}`;
      try {
        const response = await axios.get(url, {
          headers: {
            "X-Api-Key": "bf87a73a3a0340809615a94428f5d432",
          },
        });
        console.log(response.data);
        console.log(response.data.results);
        setCuisine(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCuisine();
  }, [params.type]);

  return (
    <div className="mx-auto grid grid-cols-3 gap-3 justify-center items-center content-center pt-20">
      {cuisine.map((item) => (
        <div
          className=" aspect-video p-5 bg-neutral-300 rounded-3xl w-80 text-center justify-center items-center content-center mx-auto"
          key={item.id}
        >
          <img className="rounded-lg" src={item.image} alt="" />
          <h3>{item.title}</h3>
          <ButtonComponent
            itemId={item.id}
            buttonText={"Details"}
          ></ButtonComponent>
        </div>
      ))}
    </div>
  );
};

export default Cuisine;
