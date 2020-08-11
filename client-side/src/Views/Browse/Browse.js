import React, { Component } from 'react';
import SessionCards from '../../Components/Collections/sessionCard';
import Filter from '../../Components/Filters/Filter';

import { listSessions } from '../../Services/sessions';

class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      sessions: [],
    };
  }

  loadSessionList() {
    listSessions()
      .then((sessions) => {
        this.setState({
          sessions: sessions,
          loaded: true,
        });
      })
      .catch((error) => {
        // Handle error
        console.log(error);
      });
  }

  componentDidMount() {
    this.loadSessionList();
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ width: '90%', margin: 'auto' }}>
          <Filter></Filter>
          <SessionCards sessions={this.state.sessions} />
        </div>
      </React.Fragment>
    );
  }
}

export default Browse;
