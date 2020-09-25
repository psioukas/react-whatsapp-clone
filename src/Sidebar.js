import React from "react";
import "./Sidebar.css";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { Avatar, IconButton } from "@material-ui/core";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
      <Avatar src="https://scontent.fnic3-1.fna.fbcdn.net/v/t1.0-9/46762616_10218132235440566_6034260159881019392_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=SL6zKSP6iIUAX8qgZY1&_nc_ht=scontent.fnic3-1.fna&oh=c716862ab65f41b4ecaafa2f67d5f161&oe=5F86723A" />
      
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
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
          <SearchOutlinedIcon />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat />

        <SidebarChat />

        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
