import React from "react";
import { Menu, Button, Icon } from "antd";

export default class Containers extends React.Component {
  render() {
    return (
      <div>        
        <Menu mode="horizontal">
          <Menu.Item>
            <a href="/">
              <b>Hanuman</b>
            </a>
          </Menu.Item>
          <Menu.Item key="list">
            <a href="/list">人才</a>
          </Menu.Item>
          <Menu.Item key="company">
            <a href="/company">公司</a>
          </Menu.Item>
        </Menu>
        This is template page.
      </div>
    );
  }
}
