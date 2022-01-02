import "./App.scss";
import React from "react";
import CardList from "./component/CardList/CardList";

const App = () => {
  

  return (
    
    
    <div className="App">
      <div className="h1">
    <h1 className="app__h1">Earthquakes</h1>
    </div>
    
      <CardList/>
     
    </div>
    
    );
};

export default App;
