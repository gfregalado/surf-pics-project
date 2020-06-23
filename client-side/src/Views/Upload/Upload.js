import React, { Component } from 'react';
import {
  Form,
  Select,
  DatePicker,
  Checkbox,
  Row,
  Col,
  Button,
  Upload,
} from 'antd';

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
      fileList: [
        {
          uid: '-1',
          name: 'xxx.png',
          status: 'done',
          url:
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          thumbUrl:
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: '-2',
          name: 'yyy.png',
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <h1>Upload your Images</h1>
        <div class={Classes.Container}>
          <Form
            {...layout}
            name="nest-messages"
            // onFinish={onFinish}
            // validateMessages={validateMessages}
          >
            <Row justify="space-between">
              <Col span={10}>
                <Form.Item
                  name="location"
                  label="Select Location"
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: 'Please where these pictures are',
                    },
                  ]}
                >
                  <Select placeholder="Please select a country">
                    <Option value="china">Prai Grande</Option>
                    <Option value="usa">Guincho</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="date-picker" label="DatePicker">
                  <DatePicker />
                </Form.Item>
                <Form.Item name="Period" label="Period">
                  <Checkbox.Group>
                    <Row>
                      <Col span={8}>
                        <Checkbox
                          value="afternoon"
                          style={{ lineHeight: '32px' }}
                        >
                          Afternoon
                        </Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox
                          value="morning"
                          style={{ lineHeight: '32px' }}
                        >
                          Morning
                        </Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
                </Form.Item>
              </Col>
              <Col span={10}>
                <Form.Item>
                  <Upload
                    multiple
                    // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture"
                    defaultFileList={[...this.state.fileList]}
                  >
                    <Button>
                      <UploadOutlined /> Upload
                    </Button>
                  </Upload>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </React.Fragment>
    );
  }
}

export default uploadForm;
