import React from 'react';
import Header from './Header';
import PlaceList from './PlaceList';
import { Switch, Route } from 'react-router-dom';
import NewPlaceForm from './NewPlaceForm';
import Error404 from './Error404';
// import Place from './Place';
// import Footer from './Footer';

function App(){
  return(
    <div>
      <style jsx global>{`
        body {
          font-family: monospace;
          background-color: #576578;
        }
        `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={PlaceList} />
        <Route path='/newPlace' component={NewPlaceForm} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}
export default App;
