import React, { Component } from 'react';
import { Form, Select, DatePicker, Row, Col, Button, Upload } from 'antd';

// import { upload } from '../../Services/PhotosUpload';
// import { IKContext, IKUpload } from 'imagekitio-react';

import { UploadOutlined } from '@ant-design/icons';
import Classes from './Upload.module.css';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

class uploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: [],
    };
  }

  onFinish = async (values) => {
    try {
      console.log(values);
    } catch (error) {
      alert(error);
    }
  };

  imagekit = {
    publicKey: `${process.env.REACT_APP_IMAGEKIT_API_KEY}`,
    urlEndpoint: `${process.env.REACT_APP_IMAGEKIT_URLENDPOINT}`,
    authenticationEndpoint: `${process.env.REACT_APP_IMAGEKIT_AUTHENTICATIONENDPOINT}`,
  };

  render() {
    return (
      <React.Fragment>
        <h1>Upload your Images</h1>
        <div class={Classes.Container}>
          <Form
            name="upload-form"
            onFinish={this.onFinish}
            layout="horizontal"
            {...layout}
          >
            <Row>
              <Row>
                <Col span={24}>
                  <Form.Item
                    name="location"
                    label="Location"
                    rules={[
                      {
                        required: true,
                        message: 'Please select where these pictures are',
                      },
                    ]}
                  >
                    <Select placeholder="Please select a country">
                      <Option value="Praia Grande">Praia Grande</Option>
                      <Option value="Guincho">Guincho</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <Form.Item
                    name="date"
                    label="Date"
                    rules={[
                      {
                        required: true,
                        message: 'Please select where these pictures are',
                      },
                    ]}
                  >
                    <DatePicker />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="period"
                    label="Period"
                    rules={[
                      {
                        required: true,
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
                </Col>
              </Row>
              <Form.Item name="photos">
                <Upload
                  multiple
                  action="https://upload.imagekit.io/api/v1/files/upload"
                  data={this.imagekit}
                  listType="picture"
                  defaultFileList={[...this.state.fileList]}
                >
                  <Button>
                    <UploadOutlined /> Upload
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item>
                <Button
                  htmlType="submit"
                  className="upload-form-button"
                  type="primary"
                >
                  Submit Photo
                </Button>
              </Form.Item>
            </Row>
          </Form>
        </div>
      </React.Fragment>
    );
  }
}

export default uploadForm;
