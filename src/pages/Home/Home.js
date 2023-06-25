import * as React from "react";
import "./Home.scss";

import HomeMainExpencesItems from "./HomeMainExpencesItems";

const Home = () => {
  return (
    <div>
      <div className="home">
        <h2 className="home__title">Expenses</h2>
        <HomeMainExpencesItems />
      </div>
    </div>
  );
};

export default Home;
