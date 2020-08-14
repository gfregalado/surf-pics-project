import React, { Component } from 'react';
import SessionCards from '../../Components/Collections/sessionCard';
import Filter from '../../Components/Filters/Filter';
import { Pagination } from 'antd';

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
          <Pagination
            defaultCurrent={1}
            total={200}
            showSizeChanger={false}
            style={{ margin: '50px' }}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Browse;
