import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleMeal = () => {
  const [singleMeal, setSingleMeal] = useState([]);
  const [activeTab, setActiveTab] = useState("instructions");
  const { id } = useParams();

  useEffect(() => {
    const fetchMeal = async () => {
      const url = `https://api.spoonacular.com/recipes/${id}/information`;
      try {
        console.log("Fetching meal with id:", id);
        const response = await axios.get(url, {
          headers: {
            "X-Api-Key": "bf87a73a3a0340809615a94428f5d432",
          },
        });

        setSingleMeal(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMeal();
  }, [id]);

  // Add a loading state until singleMeal is fetched
  if (!singleMeal.id) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" flex flex-grow w-full items-center justify-center min-h-screen">
      <div className="max-w-2xl relative flex w-full flex-col-reverse lg:flex-row">
        <div className=" w-full p-4">
          <h2 className="text-3xl font-semibold mb-4 font-serif lg:mb-0">
            {singleMeal.title}
          </h2>

          <div className="mb-4 flex">
            <button
              className={`px-4 py-2 ${
                activeTab === "instructions"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              } mr-2 flex-1`}
              onClick={() => setActiveTab("instructions")}
            >
              Instructions
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === "ingredients"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              } flex-1`}
              onClick={() => setActiveTab("ingredients")}
            >
              Ingredients
            </button>
          </div>

          {activeTab === "instructions" && (
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Instructions:</h3>
              <div
                dangerouslySetInnerHTML={{ __html: singleMeal.instructions }}
                className="whitespace-pre-line"
              ></div>
            </div>
          )}

          {activeTab === "ingredients" && (
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
              <ul>
                {singleMeal.extendedIngredients.map((item) => (
                  <li key={item.id} className="list-disc ml-4">
                    {item.original}
                  </li>
                ))}
              </ul>
              <div>
                <h3 className="text-xl font-semibold mb-2">Summary:</h3>
                <p dangerouslySetInnerHTML={{ __html: singleMeal.summary }}></p>
              </div>
            </div>
          )}
        </div>

        <div className="w-full ">
          {singleMeal && (
            <img
              src={singleMeal.image}
              alt={singleMeal.title}
              className="rounded-lg shadow-md w-full h-auto"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleMeal;
