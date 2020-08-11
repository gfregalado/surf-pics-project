import React from 'react';
import { Card } from 'antd';

import Classes from './sessionCard.module.css';

const { Meta } = Card;

const SessionCards = (props) => {
  return (
    <div className={Classes.container}>
      {props.sessions.map((session) => (
        <Card
          hoverable
          style={{ width: 270, margin: '20px auto' }}
          cover={<img alt="session image" src={session.imagesUrls[0]} />}
        >
          <Meta title="sss" description="sdasd" />
        </Card>
      ))}
    </div>
  );
};

export default SessionCards;
