import React from "react";
import MenuApp from "../containers/MenuSection";
import { Layout, Header, Content } from "antd";

const PageContent = props => {
  console.log("page content props: ", props);
  const { Sider, Header, Content } = Layout;
  return (
    <Layout>
      <Sider>
        <MenuApp />
      </Sider>
      <Layout>
        <Header>
          <span>This is header.</span>
        </Header>
        <Content>
          <span>{props.content}</span>
        </Content>
      </Layout>
    </Layout>
  );
};

export default PageContent;
