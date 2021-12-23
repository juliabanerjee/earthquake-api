import "./App.scss";
import React from "react";
import Card from "./component/Card/Card";
import CardList from "./component/CardList/CardList";

const App = () => {
  

  return (
    <div className="App">
      <h1>Earthquakes</h1>
      <input type="checkbox" />

      <CardList/>
    </div>
  );
};

export default App;
