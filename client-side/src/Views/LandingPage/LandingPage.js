import React from 'react';
import Navbar from '../../Components/Navigation/Navbar';
import HeroBanner from '../../Components/LandingPage/HeroBanner/HeroBanner';
import Signup from '../Authentication/Signup/Signup';

const landingPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <HeroBanner />
      <Signup></Signup>
    </React.Fragment>
  );
};

export default landingPage;
