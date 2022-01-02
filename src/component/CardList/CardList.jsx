import React from "react";
import "./CardList.scss";
import Card from "../Card/Card";
import { useState, useEffect } from "react";

const CardList = () =>{


const [earthquakeArr, setEarthquakeArr] = useState([]);
// const [minMagnitude, setMinMagnitude] = useState(1);

  console.log(earthquakeArr);

  const fetchEarthquakeData = () => {
    
    // const handleMinMagnitude = (event) =>{
    //   setMinMagnitude(event.target.value);
    //   }
    //${minMagnitude}
    const url = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-01-01&endtime=2020-02-01&minmagnitude=6&limit=20000`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setEarthquakeArr(result.features);
      })
      // .catch((error) => {
      //   console.log("There has been an error with this request");
      // });
      
  };

  useEffect(() => {
    fetchEarthquakeData();
  }, []);
//mapping the earthquakes into individual cards
  const earthquakeJsx = earthquakeArr.map((earthquake, index) => {

    return <Card key={index + "earthquake"} location={earthquake.properties.place}
    magnitude={earthquake.properties.mag}
    tsunami={earthquake.properties.tsunami} furtherInfo = {earthquake.properties.url}/>
    
  });





  return(
    <div className="cardList">
     {/* <label htmlFor="">Magnitude greater than <input type="range" min="0" max="10" step="1" onChange={handleMinMagnitude} value={minMagnitude}/> </label>  */}
      {earthquakeJsx}
      
    </div>


  );
};

export default CardList;