import React from 'react';
import Header from './Header';
import PlaceList from './PlaceList';
// import Place from './Place';
// import Footer from './Footer';

function App(){
  return(
    <div>
      <style jsx global>{`
        body {
          font-family: Helvetica;
          background-color: #D1CECA;
        }
        `}</style>
      <Header/>
      <PlaceList/>
    </div>
  );
}
export default App;
