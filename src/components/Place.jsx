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
      <p>{props.image}</p>
    </div>
  );
}

Place.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string
};
// function Place(){
//   <div>
//     <style jsx>{`
//         div {
//           background-color: #D1CECA;
//         }
//       `}</style>
//     <h3>3A - Thato & Haley</h3>
//     <p><em>Firebase will not save record!</em></p>
//     <hr/>
//   </div>;
// }
export default Place;
