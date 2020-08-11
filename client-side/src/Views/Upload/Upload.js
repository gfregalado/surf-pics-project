import React, { Component } from 'react';
import { Form, Select, DatePicker, Button, Upload } from 'antd';

import { upload } from '../../Services/PhotosUpload';
import { uploadSession } from '../../Services/sessions';

import { UploadOutlined } from '@ant-design/icons';
import Classes from './Upload.module.css';

const { Option } = Select;
const { Dragger } = Upload;

class uploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: [],
      uploaded: false,
    };
  }

  onFinish = async (values) => {
    const { fileList } = this.state;
    const imagesUrls = await upload(fileList);
    const session = { ...values, imagesUrls };
    uploadSession(session);
  };

  handleBeforeUpload = (file) => {
    this.setState((previousState) => ({
      fileList: [...previousState.fileList, file],
      uploaded: true,
    }));
    return false;
  };

  handleRemove = (file) => {
    let index = this.state.fileList.findIndex((item) => item.uid === file.uid);
    const files = [...this.state.fileList];
    files.splice(index, 1);
    this.setState({
      fileList: files,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className={Classes.background}>
          <div className={Classes.FormContainer}>
            <Form
              name="upload-form"
              onFinish={this.onFinish}
              layout="horizontal"
            >
              <Form.Item
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
                name="date"
                label="Date"
                rules={[
                  {
                    required: false,
                    message: 'When was this session?',
                  },
                ]}
              >
                <DatePicker />
              </Form.Item>
              <Form.Item
                name="period"
                label="Period"
                rules={[
                  {
                    required: false,
                    message: 'Where was this session?',
                  },
                ]}
              >
                <Select placeholder="Please select a period of the day">
                  <Option value="morning">Morning</Option>
                  <Option value="afternoon">Afternoon</Option>
                  <Option value="full-day">Full day</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="watersports"
                label="Watersports Featured"
                rules={[
                  {
                    required: false,
                    message: 'Please select what watersports are featured',
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

              <Form.Item name="photos">
                <Dragger
                  multiple
                  beforeUpload={this.handleBeforeUpload}
                  listType="text"
                  onRemove={this.handleRemove}
                >
                  <Button>
                    <UploadOutlined /> Add Files
                  </Button>
                </Dragger>
              </Form.Item>

              <Button
                htmlType="submit"
                className="upload-form-button"
                type="primary"
              >
                Submit Session
              </Button>
            </Form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default uploadForm;
