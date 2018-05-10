import React from 'react';

class NewPlaceControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }


  render(){
    return (
      <div>
        <p>This is the NewPlaceControl component!</p>
      </div>
    );
  }
}

export default NewPlaceControl;
