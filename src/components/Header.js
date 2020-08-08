import React from 'react';
import logo from '../assets/erkamlogo.svg';

export const Header = () => {
  return (
    <header
      className="header row"
    >
      <img alt='EG' src={logo} height='50px' />
      <div className="header">
        <h4 className="header_name">Erkam Gundogdu</h4>
        <h5 className="header_subtitle">
          Frontend Developer & Scientist<br />at Reading, United Kingdom
    </h5>
      </div>
    </header >
  )
}
