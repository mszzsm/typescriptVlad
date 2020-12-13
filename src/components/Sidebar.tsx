import React from 'react';
import style from './Sidebar.module.css';

type Sidebar = {
  title: string,
  paragraph: string
}

const Sidebar = ({ title, paragraph }: Sidebar) => {

return (

<aside className={style.sidebar}>
  <p className={style.title}>{title}</p>
  <hr/>
  <a href="#dashboard">Dashboard</a>
  <a href="#my-projects">My projects</a>
  <a href="#my-leads">My leads</a>
  <a href="#purchase">Purchase Leads</a>
  <a href="#packages">Packages</a>

</aside>
)

}


export default Sidebar;