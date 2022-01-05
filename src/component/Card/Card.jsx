import React from "react";
import "./Card.scss";
import epicentre from "../../assets/images/epicentre.png";

const Card = (props) =>{



const {location, magnitude, tsunami, furtherInfo} = props;




  return(

<div className= "card">
<div className="card__section1">
<h2 className="card__section1__h2">{location}</h2>
<img src={epicentre} alt="earthquake epicentre diagram" className="card__section1__image"/>
</div>

<p className="card__p"><span className="make-bold">Magnitude:</span> {magnitude}</p>
<p className="card__p"><span className="make-bold">Tsunami: </span> {tsunami}</p>
<p className="card__p">Further Info: <a className="card__further-info" href={furtherInfo}>{furtherInfo}</a></p>


</div>


  );
};

export default Card;