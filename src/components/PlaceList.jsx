import React from 'react';
import Place from './Place';

var masterPlaceList = [
  {
    name: 'Rome',
    description: 'Lconsectetur adipisicing elit',
    image: 'img'
  },
  {
    name: 'Nice',
    description: 'Ldolor siorem ipsum t amet',
    image: 'img'
  },
  {
    name: 'Kirkland',
    description: 'Lorem ipsum dolor adipisicing elit',
    image: 'img'
  }
];

function PlaceList(){
  var placeListStyles = {
    fontFamily:'monospace',
    fontWeight: 'light',
    margin: '20px',
    padding: '20px',
    width: '33.3%',
    alignItems: 'stretch',
  };
  return(
    <div style={placeListStyles}>
      {masterPlaceList.map((place,index) =>
        <Place name={place.name}
          description={place.description}
          image={place.image}
          key={index}/>
      )}
    </div>
  );
}
export default PlaceList;
