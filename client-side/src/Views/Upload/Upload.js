import React, { Component } from 'react';
import {
  Form,
  Select,
  DatePicker,
  Row,
  Col,
  Button,
  Upload,
  Empty,
  Checkbox,
} from 'antd';

import { upload } from '../../Services/PhotosUpload';

import { UploadOutlined } from '@ant-design/icons';
import Classes from './Upload.module.css';

const { Option } = Select;
const { Dragger } = Upload;

class uploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: [],
      uploading: false,
      uploaded: false,
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
      uploaded: true,
    }));
    return false;
  };

  layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  render() {
    return (
      <React.Fragment>
        <div className={Classes.FormContainer}>
          <Row justify="center" gutter={[40, 40]}>
            <Col span={10}>
              <Form
                {...this.layout}
                name="upload-form"
                onFinish={this.onFinish}
                layout="horizontal"
              >
                <Form.Item
                  name="Spot"
                  label="Surf Spot"
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
                  name="Spot"
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
                      message: 'Please select where these pictures are',
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
                  name="Watersports"
                  label="Watersports Featured"
                  rules={[
                    {
                      required: false,
                      message: 'Please select where these pictures are',
                    },
                  ]}
                >
                  <Select placeholder="Watersports Options" mode="multiple">
                    <Option value="Praia Grande">Praia Grande</Option>
                    <Option value="Guincho">Guincho</Option>
                  </Select>
                </Form.Item>

                <Button
                  htmlType="submit"
                  className="upload-form-button"
                  type="primary"
                >
                  Submit Session
                </Button>
              </Form>
            </Col>
            <Col span={14}>
              <div className={Classes.PhotoBox}>
                <Form.Item name="photos">
                  <Dragger
                    multiple
                    onPreview={this.handlePreview}
                    beforeUpload={this.handleBeforeUpload}
                    listType="picture-card"
                  >
                    <Button>
                      <UploadOutlined /> Add Files
                    </Button>
                  </Dragger>
                </Form.Item>
              </div>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default uploadForm;
