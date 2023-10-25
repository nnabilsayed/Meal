import Veggies from "../components/Veggies";
import Popular from "../components/Popular";
import SearchComponent from "../components/SearchComponent";

const Home = () => {
  return (
    <div>
      <SearchComponent></SearchComponent>
      <Veggies></Veggies>
      <Popular></Popular>
    </div>
  );
};

export default Home;
