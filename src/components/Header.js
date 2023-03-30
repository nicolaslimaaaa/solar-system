import React from 'react';
import SolarSystem from './SolarSystem';

class Header extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>Sistema Solar</h1>
        </header>
        <SolarSystem />
      </div>
    );
  }
}

export default Header;
