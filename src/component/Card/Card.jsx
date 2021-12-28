import React from "react";
import "./Card.scss";
import epicentre from "../../assets/images/epicentre.png";

const Card = (props) =>{



const {location, magnitude, tsunami, furtherInfo} = props;




  return(

<div className= "card">
<div className="card__h2-image">
<h2 className="card__h2">{location}</h2>
<img src={epicentre} alt="earthquake epicentre diagram" className="card__image"/>
</div>

<p><span className="make-bold">Magnitude:</span> {magnitude}</p>
<p><span className="make-bold">Tsunami: </span> {tsunami}</p>
<p>Further Info: <span className="elipsis">{furtherInfo}</span></p>

</div>


  );
};

export default Card;