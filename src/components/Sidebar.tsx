import React from "react";
import style from "./Sidebar.css";

type Props = {
  title: string;
  paragraph: string;
};

console.log("SIDEBAR COMPONENT");
// const ComponentName: React.FC<Props>
const Sidebar: React.FC<Props> = ({ title, paragraph }) => {
  return (
    <aside className={'sidebar'}>
      <div className={'sidebarHeader'}>
        <img src="https://picsum.photos/50/?blur" alt="" />
        <p className={'title'}>{title}</p>
      </div>
      <hr />
      <a href="#dashboard">Dashboard</a>
      <a href="#my-projects">My projects</a>
      <a href="#my-leads">My leads</a>
      <a href="#purchase">Purchase Leads</a>
      <a href="#packages">Packages</a>
    </aside>
  );
};

export default Sidebar;
