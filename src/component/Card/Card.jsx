import React from "react";
import "./Card.scss";
import epicentre from "../../assets/images/epicentre.png";

const Card = (props) =>{



const {location, magnitude, tsunami, furtherInfo} = props;




  return(

<div className= "card">

<h2 className="card__h2">{location}</h2>
<img src={epicentre} alt="earthquake epicentre diagram" className="card__image"/>


<p>Magnitude: {magnitude}</p>
<p>Tsunami: {tsunami}</p>
<p>Further Info: {furtherInfo}</p>

</div>


  );
};

export default Card;