import React from 'react';
import './header.scss';

const Header = (props) => {
  return (
    <header className="app-header" data-test="header">
      <div data-test="text">
        Hello
      </div>
    </header>
  )
}

export default Header;
