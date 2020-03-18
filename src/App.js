import React from "react";
import "./App.css";

import { Layout, Button, DatePicker } from "antd";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>
          <DatePicker />

          <Button type="primary" style={{ marginLeft: "1rem" }}>
            Button
          </Button>
        </Content>
        <Sider>Sider</Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
