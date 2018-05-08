import React from 'react';

function NewPlaceForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Place Name'/>
        <br/>
        <input
          type='text'
          id='description'
          placeholder='Description'/>
        <br/>
        <textarea
          id='picture'
          placeholder='Upload picture'/>
        <br/>
        <button type='submit'>Submit!</button>
      </form>
    </div>
  );
}

export default NewPlaceForm;
