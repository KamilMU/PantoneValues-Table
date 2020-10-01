import React from 'react';

function Header({ reset }) {
  return (
    <>
      <header className="header">
        <div className="header__tittle">Pantone colors</div>
        <div className="header__reset" onClick={reset}>
          <img
            alt=""
            className="image"
            src={require('../img/Icon.png')}
          />
          <span>Reset</span>
        </div>
      </header>
    </>
  );
}

export default Header;