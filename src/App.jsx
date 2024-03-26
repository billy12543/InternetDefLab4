import React, { useEffect, useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
import IntroCard from './IntroCard';
import Chat from './Chat';
const { Header, Content, Footer } = Layout;
const App = (props) => {
  const [route, setRoute] = useState(props.route)
  useEffect(()=>{
    setRoute(r=>r=props.route)
  })
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[route]}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        >
          <Menu.Item key="index"><Link to="/">網路攻防實習</Link></Menu.Item>
          <Menu.Item key="about"><Link to="/about">About</Link></Menu.Item>
          <Menu.Item key="chat"><Link to="/chat">Chat</Link></Menu.Item>
        </Menu>
      </Header>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
        </Breadcrumb>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
        {route === "chat" ? <Chat />:<IntroCard />}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default App;