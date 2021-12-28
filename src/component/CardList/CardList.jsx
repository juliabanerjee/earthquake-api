import React from "react";
import "./CardList.scss";
import Card from "../Card/Card";
import { useState, useEffect } from "react";

const CardList = () =>{

//mapping the earthquakes into individual cards
const [earthquakeArr, setEarthquakeArr] = useState([]);
  console.log(earthquakeArr);

  const isOldData = false;
  const isSerious = true;

  const fetchEarthquakeData = () => {
    const startTime = isOldData ? "2021-11-19" : "2021-11-20";
    const addMinMagnitude = isSerious && "&minmagnitude=6";

    const url = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${startTime}&endtime=2021-12-20${addMinMagnitude}&limit=20000`;

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

  const earthquakeJsx = earthquakeArr.map((earthquake, index) => {

    return <Card key={index + "earthquake"} location={earthquake.properties.place}
    magnitude={earthquake.properties.mag}
    tsunami={earthquake.properties.tsunami} furtherInfo = {earthquake.properties.url}/>
    
  });





  return(
    <div>
      
      {earthquakeJsx}
      
    </div>


  );
};

export default CardList;