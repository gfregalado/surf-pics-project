import React, { Component } from 'react';
import Collections from '../../Components/Collections/Collections';
import Filter from '../../Components/Filters/Filter';

class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div style={{ width: '90%', margin: 'auto' }}>
          <Filter></Filter>
          <Collections></Collections>
        </div>
      </React.Fragment>
    );
  }
}

export default Browse;
