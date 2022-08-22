import React from "react";
import "./Sidebar.css";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SidebarOption from "./SidebarOption";
import InboxIcon from '@mui/icons-material/Inbox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Sidebar() {
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
      >
        Compose
      </Button>

      <SidebarOption Icon={InboxIcon} title='Inbox' number={54} selected={true} />
      <SidebarOption Icon={StarBorderIcon} title='Starred' number={54} />
      <SidebarOption Icon={AccessTimeIcon} title='Snoozed' number={54} />
      <SidebarOption Icon={SendIcon} title='Sent' number={54} />
      <SidebarOption Icon={NoteIcon} title='Drafts' number={54} />
      <SidebarOption Icon={ExpandMoreIcon} title='More' number={54} />
    </div>
  );
}

export default Sidebar;
