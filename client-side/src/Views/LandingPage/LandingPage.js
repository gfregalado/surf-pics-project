import React from 'react';
import Navbar from '../../Components/Navigation/Navbar';
import HeroBanner from './HeroBanner/HeroBanner';

const landingPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <HeroBanner />
    </React.Fragment>
  );
};

export default landingPage;
