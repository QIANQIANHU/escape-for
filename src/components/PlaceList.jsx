import React from 'react';
import Place from './Place';
import picture2 from '../assets/images/place2.jpg';
import picture3 from '../assets/images/place3.jpg';
import picture4 from '../assets/images/place4.jpg';

var masterPlaceList = [
  {
    name: 'Rome',
    description: 'Lconsectetur adipisicing elit',
    image: <img src={picture2} width="300"/>
  },
  {
    name: 'Nice',
    description: 'Ldolor siorem ipsum t amet',
    image: <img src={picture3} width="300"/>
  },
  {
    name: 'Kirkland',
    description: 'Lorem ipsum dolor adipisicing elit',
    image: <img src={picture4} width="300"/>
  }
];

function PlaceList(){
  return(
    <div>
      <style jsx>{`
      fontWeight: light;
      margin: 20px;
      // padding: 20px;
      width: 33.3%;
      `}</style>
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
