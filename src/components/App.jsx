import React from 'react';
import Header from './Header';
import PlaceList from './PlaceList';
import { Switch, Route } from 'react-router-dom';
// import NewPlaceForm from './NewPlaceForm';
import Error404 from './Error404';
import NewPlaceControl from './NewPlaceControl';
// import Place from './Place';
// import Footer from './Footer';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPlaceList: []
    };
    this.handleAddingNewPlaceToList = this.handleAddingNewPlaceToList.bind(this);
  }

  handleAddingNewPlaceToList(newPlace){
    var newMasterPlaceList = this.state.masterPlaceList.slice();
    newMasterPlaceList.push(newPlace);
    this.setState({masterPlaceList: newMasterPlaceList});
  }

  render(){
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
          <Route exact path='/' render={()=><PlaceList placeList={this.state.masterPlaceList} />} />
          <Route path='/newPlace' render={()=><NewPlaceControl onNewPlaceCreation={this.handleAddingNewPlaceToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
