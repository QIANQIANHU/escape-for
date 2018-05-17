import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewPlaceForm(props){
  let _name = null;
  let _description = null;
  let _picture = null;

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewPlaceCreation({name: _name.value, description: _description.value, picture: _picture.value});
    _name.value = '';
    _description.value = '';
    _picture.value = '';
  }
  return (
    <div>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Place Name'
          ref={(input) => {_name = input;}}/>
        <br/>
        <input
          type='text'
          id='description'
          placeholder='Description'
          ref={(input) => {_description = input;}}/>
        <br/>
        <input
          type='file'
          id='picture'
          placeholder='Upload picture'
          ref={(input) => {_picture = input;}}/>
        <br/>
        <button type='submit'>Submit!</button>
      </form>
    </div>
  );
}

NewPlaceForm.propTypes + {
  onNewPlaceCreation: PropTypes.func
};

export default NewPlaceForm;
