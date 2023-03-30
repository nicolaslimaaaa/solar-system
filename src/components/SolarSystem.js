import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const planet = planets
      .map((item) => (
        <PlanetCard
          key={ item.name }
          planetName={ item.name }
          planetImage={ item.image }
        />
      ));
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        { planet }
      </div>
    );
  }
}

export default SolarSystem;
