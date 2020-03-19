import React, { useState } from "react";
import "./App.css";

import {
  Layout,
  Menu,
  Typography,
  Tabs,
  Switch,
  Button,
  DatePicker
} from "antd";
import {
  AppleOutlined,
  AndroidOutlined,
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined
} from "@ant-design/icons";

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
const { Title, Text } = Typography;
const { TabPane } = Tabs;

function App() {
  const [state, setState] = useState({
    theme: "light",
    current: "1"
  });

  const changeTheme = value => {
    setState({
      theme: value ? "dark" : "light"
    });
  };

  const handleClick = e => {
    console.log("click ", e);
    setState({
      current: e.key
    });
  };

  return (
    <Layout>
      <Header>
        <img
          width="48px"
          src="logo256.png"
          style={{ float: "left", marginTop: "8px", marginRight: "8px" }}
        />
        <Menu
          onClick={handleClick}
          selectedKeys={[state.current]}
          mode="horizontal" theme={state.theme}
        >
          <Menu.Item key="mail">
            <MailOutlined />
            Navigation One
          </Menu.Item>
          <Menu.Item key="app" disabled>
            <AppstoreOutlined />
            Navigation Two
          </Menu.Item>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <SettingOutlined />
                Navigation Three - Submenu
              </span>
            }
          >
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="alipay">
            <a
              href="https://ant.design"
              target="_blank"
              rel="noopener noreferrer"
            >
              Navigation Four - Link
            </a>
          </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider>
          <Switch
            checked={state.theme === "dark"}
            onChange={changeTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
          <br />
          <br />

          <Menu
            theme={state.theme}
            onClick={handleClick}
            style={{ width: 200 }}
            defaultOpenKeys={["sub1"]}
            selectedKeys={[state.current]}
            mode="inline"
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <MailOutlined />
                  <span>Navigation One</span>
                </span>
              }
            >
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <AppstoreOutlined />
                  <span>Navigation Two</span>
                </span>
              }
            >
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu
              key="sub4"
              title={
                <span>
                  <SettingOutlined />
                  <span>Navigation Three</span>
                </span>
              }
            >
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{ padding: "1rem" }}>
          <DatePicker />

          <Button type="primary" style={{ marginLeft: "1rem" }}>
            Button
          </Button>
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
