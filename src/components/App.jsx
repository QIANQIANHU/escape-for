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
          font-family: Times New Roman;
          background-color: #576578;
        }
        `}</style>
      <Header/>
      <PlaceList/>
    </div>
  );
}
export default App;
