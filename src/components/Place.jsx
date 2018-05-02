import React from "react";
import PropTypes from "prop-types";

 function Place(props){
   return(
     <div>
      <h1>{props.name} - {props.description}</h1>
      <p>{props.image}</p>
      <hr/>
     </div>
   );
 }

 Place.propTypes = {
   name: PropTypes.string,
   description: PropTypes.string,
   image: PropTypes.string
 };

export default Place;
