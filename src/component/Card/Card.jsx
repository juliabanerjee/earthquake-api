import React from "react";
import "./Card.scss";
import epicentre from "../../assets/images/epicentre.png";

const Card = (props) =>{



const {location, magnitude, tsunami, furtherInfo} = props;




  return(

<div className= "card">
<div className="card__container1">
<h2 className="card__container1__h2">{location}</h2>
</div>
<div className="card__container2">
<img src={epicentre} alt="earthquake epicentre diagram" className="card__container2__image"/>
</div>
<div className="card__container3">
<p className="card__container3__p"><span className="make-bold">Magnitude:</span> {magnitude}</p>
<p className="card__container3__p"><span className="make-bold">Tsunami: </span> {tsunami}</p>
<p className="card__container3__p">Further Info: <a className="card__container3__further-info" href={furtherInfo}>{furtherInfo}</a></p>
</div>

</div>


  );
};

export default Card;