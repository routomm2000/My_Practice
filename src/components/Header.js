import React from 'react';

function Header(props) {
  return (
    <header className="app-header">
      <h1>{props.title}</h1>
    </header>
  );
}

export default Header;
