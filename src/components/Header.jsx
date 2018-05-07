import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return(
    <div>
      <h1>New Place</h1>
      <Link to="/">Home</Link> | <Link to="/newplace">Create Place List</Link>
    </div>
  );
}
export default Header;
