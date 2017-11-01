import React from "react";
import { Menu } from "antd";

const MenuSection = props => {
  console.log("props:", props);
  const handleClickMenu = e => {
    console.log("click menu:", e);
    props.actions.redirect(e.key);
  };
  return (
    <Menu
      onClick={handleClickMenu}
      style={{ width: 150 }}
      mode="inline"
      defaultSelectedKeys={["candidate"]}
      defaultOpenKeys={["candidate"]}
    >
      <Menu.Item>
        <span>
          <b>Hanuman</b>
        </span>
      </Menu.Item>
      <Menu.Item key="candidate">
        <span>人才</span>
      </Menu.Item>
      <Menu.Item key="folder">
        <span>文件夹</span>
      </Menu.Item>
      <Menu.Item key="task">
        <span>任务</span>
      </Menu.Item>
      <Menu.SubMenu key="new" title={<span>新建</span>}>
        <Menu.Item key="newcandidate">人才</Menu.Item>
        <Menu.Item key="newcompany">公司</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

/*
    
*/

export default MenuSection;
