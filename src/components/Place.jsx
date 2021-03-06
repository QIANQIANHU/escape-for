import React from 'react';
import PropTypes from 'prop-types';

function Place(props){
  var placeElement = {
    backgroundColor: 'grey',
    padding: '20px',
    margin: '20px',
    border: 'solid #D1CECA 10px',
  };
  return(
    <div style={placeElement}>
      <h1>{props.name} - {props.description}</h1>
      <img src={props.image}/>
    </div>
  );
}

Place.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string
};

export default Place;
