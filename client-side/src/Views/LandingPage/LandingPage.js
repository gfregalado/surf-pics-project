import React from 'react';
import Navbar from '../../Components/Navigation/Navbar';
import HeroBanner from './HeroBanner/HeroBanner';

const landingPage = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <Navbar loggedInUser={props.loggedInUser} {...props} />
      <HeroBanner />
    </React.Fragment>
  );
};

export default landingPage;
