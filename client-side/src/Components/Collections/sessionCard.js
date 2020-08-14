import React from 'react';
import moment from 'moment';

import { Card, Tag } from 'antd';

import Classes from './sessionCard.module.css';

const { Meta } = Card;

const SessionCards = (props) => {
  return (
    <div className={Classes.container}>
      {props.sessions.map((session) => (
        <Card
          key={session._id}
          className={Classes.card}
          style={{ width: 300 }}
          cover={
            <img alt="example" src={session.imagesUrls[0]} height="170px" />
          }
        >
          <Meta
            title={`${session.country}, ${session.spot}`}
            description={`${moment(session.date).format('dddd, MMMM Do YYYY')}`}
          />
          <small>
            {session.period.charAt(0).toUpperCase() + session.period.slice(1)}
          </small>
          <br></br>
          {session.watersports.map((tag) => (
            <Tag color="#d1ddd6">{tag}</Tag>
          ))}
        </Card>
      ))}
    </div>
  );
};

export default SessionCards;
