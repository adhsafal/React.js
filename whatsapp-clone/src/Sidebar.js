import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
import DonutLargrIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChats from "./SidebarChats";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargrIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or Start new chat" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChats addNewChat />
        <SidebarChats />
        <SidebarChats />
        <SidebarChats />
        <SidebarChats />
        <SidebarChats />
        <SidebarChats />
      </div>
    </div>
  );
};

export default Sidebar;
