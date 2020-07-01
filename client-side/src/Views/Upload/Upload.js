import React, { Component } from 'react';
import { Form, Select, DatePicker, Row, Col, Button, Upload } from 'antd';

import { upload } from '../../Services/PhotosUpload';

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
      uploading: false,
    };
  }

  onFinish = async (values) => {
    const { fileList } = this.state;
    const urls = await upload(fileList);
    console.log(urls);
  };

  handlePreview = (file) => {
    this.setState({
      previewImage: file.thumbUrl,
      previewVisible: true,
    });
  };

  handleBeforeUpload = (file) => {
    console.log('file', file);
    this.setState((previousState) => ({
      fileList: [...previousState.fileList, file],
    }));
    return false;
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
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <Form.Item
                    name="date"
                    label="Date"
                    rules={[
                      {
                        required: false,
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
                </Col>
              </Row>
              <Form.Item name="photos">
                <Upload
                  multiple
                  onPreview={this.handlePreview}
                  beforeUpload={this.handleBeforeUpload}
                  listType="picture"
                >
                  <Button>
                    <UploadOutlined /> Add Files
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
