import React from 'react';
import { Form, Select, DatePicker } from 'antd';
import Classes from './Filter.module.css';

const { Option } = Select;

const Filter = () => {
  return (
    <div className={Classes.filterContainer}>
      <Form
        name="filter-form"
        layout="horizontal"
        className={Classes.container}
      >
        <Form.Item
          className={Classes.itemMedium}
          name="country"
          label="Country"
          rules={[
            {
              required: false,
              message: 'Please select where these pictures are',
            },
          ]}
        >
          <Select placeholder="Please select a country">
            <Option value="Praia Grande">Portugal</Option>
          </Select>
        </Form.Item>
        <Form.Item
          className={Classes.itemMedium}
          name="spot"
          label="Surf Spot"
          rules={[
            {
              required: false,
              message: 'Please select where these pictures are',
            },
          ]}
        >
          <Select placeholder="Please select a country">
            <Option value="Praia Grande">Praia Grande</Option>
            <Option value="Guincho">Guincho</Option>
          </Select>
        </Form.Item>
        <Form.Item
          className={Classes.itemSmall}
          name="date"
          label="Date"
          rules={[
            {
              required: false,
              message: 'Please select where these pictures are',
            },
          ]}
        >
          <DatePicker className={{ width: '120px' }} />
        </Form.Item>

        <Form.Item
          className={Classes.itemMedium}
          name="period"
          label="Period"
          rules={[
            {
              required: false,
              message: 'Please select where these pictures are',
            },
          ]}
        >
          <Select placeholder="Please select a country">
            <Option value="morning">Morning</Option>
            <Option value="afternoon">Afternoon</Option>
            <Option value="full-day">Full day</Option>
          </Select>
        </Form.Item>

        <Form.Item
          className={Classes.itemLarge}
          name="watersports"
          label="Watersports Featured"
          rules={[
            {
              required: false,
              message: 'Please select where these pictures are',
            },
          ]}
        >
          <Select placeholder="Watersports Options" mode="multiple">
            <Option value="Bodyboard">Bodyboard</Option>
            <Option value="Kite Surf">Kite Surf</Option>
            <Option value="Standup Paddle">Standup Paddle</Option>
            <Option value="Surf">Surf</Option>
            <Option value="Wind Surf">Wind Surf</Option>
            <Option value="Other">Other</Option>
          </Select>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Filter;
