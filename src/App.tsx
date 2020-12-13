import React from 'react';
import Table from './components/Table';
import Sidebar from './components/Sidebar';
import style from './App.module.css';
import { type } from 'os';




const App = () => {
  const headers : string[] = ["name","mobile no","project name", "date",""];
  const TableData : object = {
    user1 : ["User1", "+38082374637", "Project1", "20.01.2020"],
    user2 : ["User2", "+38082374637", "Project2", "20.11.2020"],
    user3 : ["User2", "+38082374637", "Project2", "20.11.2020"],
    user4 : ["User2", "+38082374637", "Project2", "20.11.2020"],
    user5 : ["User2", "+38082374637", "Project2", "20.11.2020"],
  }
  
  return (
      <div className={style.page}>
        <div className={style.sidebar}>
          <Sidebar title="YozmaTech" paragraph="elements"/>
        </div>
        <div className={style.tablecContainer}>
          <h1>My Leads</h1>
          <hr></hr>
          <div className={style.table}>
            <Table props={headers} data={TableData}/>
          </div>
        </div>
      </div>
  )
}

export default App;
