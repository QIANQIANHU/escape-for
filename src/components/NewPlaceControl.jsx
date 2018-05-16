import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewPlaceForm from './NewPlaceForm';
import PropTypes from 'prop-types';

class NewPlaceControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewPlaceForm onNewPlaceCreation={this.props.onNewPlaceCreation}/>;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewPlaceControl.propTypes = {
  onNewPlaceCreation: PropTypes.func
};

export default NewPlaceControl;
