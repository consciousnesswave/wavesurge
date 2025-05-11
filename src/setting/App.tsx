import React from 'react';
import {
  ApartmentOutlined,
} from '@ant-design/icons';
import { Button, Card, Form, Input, Layout, Menu, theme, type FormProps } from 'antd';

const { Header, Sider, Content } = Layout;

type FieldType = {
  server?: string;
  port?: string;
};

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
  };

  return (
    <Layout className='layoutBox'>
      <Sider trigger={null}>
        <div className="logo-vertical">Setting</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <ApartmentOutlined />,
              label: 'Proxy',
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Card title="Proxy servers">
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item<FieldType>
                label="Server"
                name="server"
                rules={[{ required: true, message: 'Please input your Server!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item<FieldType>
                label="Port"
                name="port"
                rules={[{ required: true, message: 'Please input your Port!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;