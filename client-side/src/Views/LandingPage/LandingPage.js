import React from 'react';
import HeroBanner from './HeroBanner/HeroBanner';

const landingPage = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <HeroBanner />
    </React.Fragment>
  );
};

export default landingPage;
