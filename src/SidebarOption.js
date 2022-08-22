import React from "react";
import "./SidebarOptions.css";

function SidebarOption({ Icon, title, number, selected }) {
  return <div className={`sidebarOptions ${selected && 'sidebarOptions--active'}`}>
    <Icon/>
    <h3>{title}</h3>
    <p>{number}</p>
  </div>;
}

export default SidebarOption;