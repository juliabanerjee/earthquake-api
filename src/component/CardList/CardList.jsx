import React from "react";
import "./CardList.scss";
import Card from "../Card/Card";
import { useState, useEffect } from "react";

const CardList = () =>{


const [earthquakeArr, setEarthquakeArr] = useState([]);
const [minMagnitude, setMinMagnitude] = useState(1);
const [orderByMagnitude, setOrderByMagnitude] = useState(false);

  console.log(earthquakeArr);

  const fetchEarthquakeData = () => {
    
    
    //${minMagnitude}
    const url = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-01-01&endtime=2020-02-01&minmagnitude=${minMagnitude}&limit=20`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setEarthquakeArr(result.features);
      })
      .catch((error) => {
        console.log("There has been an error with this request");
      });
      
  };

  useEffect(() => {
    fetchEarthquakeData();
  }, [minMagnitude]);
//mapping the earthquakes into individual cards
  const earthquakeJsx = earthquakeArr.map((earthquake, index) => {

    return <Card key={index + "earthquake"} location={earthquake.properties.place}
    magnitude={earthquake.properties.mag}
    tsunami={earthquake.properties.tsunami} furtherInfo = {earthquake.properties.url}/>
    
  });
//function for range bar
  const handleMinMagnitude = (event) =>{
    setMinMagnitude(event.target.value);
    };

    //function for checkbox
    const handleOrderByMagnitude = (event) =>{
      if(orderByMagnitude === true ){
        !setOrderByMagnitude
        console.log("it is false")
      } else{
        !setOrderByMagnitude
        console.log("it is true")
      }
      // setOrderByMagnitude(event.target.value)
    }

  return(
    <div className="cardList">
      <div className="cardList__filters">
     <label className="cardList__filters__magnitude" htmlFor="">Magnitude is {minMagnitude} and above <input type="range" min="0" max="10" step="1" onChange={handleMinMagnitude} value={minMagnitude}/> </label> 
     <p className="cardList__filters__display">Currently displaying {earthquakeArr.length} results</p>
     </div>
     <label htmlFor="">Order by magnitude <input type="checkbox" onToggle={handleOrderByMagnitude} /></label>
      {earthquakeJsx}
      
    </div>


  );
};

export default CardList;