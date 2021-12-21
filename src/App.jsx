import "./App.scss";
import { useState, useEffect } from "react";

const App = () => {
  const [earthquakeArr, setEarthquakeArr] = useState([]);
  console.log(earthquakeArr);

  const isOldData = false;
const isSerious = true;
  const fetchEarthquakeData = () => {
    const startTime = isOldData ? "2021-11-19" : "2021-11-20";
    const addMinMagnitude = isSerious && "&minmagnitude=6";

    const url =
    `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${startTime}&endtime=2021-12-20${addMinMagnitude}&limit=20000`;

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
  }, []);

  const locationJsx = earthquakeArr.map((earthquake, index)=>{
    return <p key = {index + "earthquake"}>{earthquake.properties.place}</p>
//console.log(earthquake.properties.place)
  })

  return (
    <div className="App">
      <h1>Earthquakes</h1>
      <input type="checkbox" />
      {locationJsx}
    </div>
  );
};

export default App;
