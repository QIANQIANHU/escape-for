import React from 'react';
import Header from './Header';
import PlaceList from './PlaceList';
import { Switch, Route } from 'react-router-dom';
import NewPlaceForm from './NewPlaceForm';
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
      <Switch>
        <Route exact path='/' component={PlaceList} />
        <Route path='/newPlace' component={NewPlaceForm} />
      </Switch>
    </div>
  );
}
export default App;
