import React from 'react';
import Table from './components/Table';
import Sidebar from './components/Sidebar';
import style from './App.module.css';
import { type } from 'os';



interface IState {
  store?: object;
  storage?: object;
}


const App = () => {
  const headers : string[] = ["name","mobile no","project name", "date",""];
  const TableData : object = {
    user1 : ["User1", "+38082374637", "Project1", "20.01.2020","https://picsum.photos/40/?random=1",1],
    user2 : ["User2", "+38082374637", "Project2", "20.11.2020","https://picsum.photos/40/?random=2",2],
    user3 : ["User2", "+38082374637", "Project2", "20.11.2020","https://picsum.photos/40/?random=3",3],
    user4 : ["User2", "+38082374637", "Project2", "20.11.2020","https://picsum.photos/40/?random=4",4],
    user5 : ["User2", "+38082374637", "Project2", "20.11.2020","https://picsum.photos/40/?random=5",5],
  }

  return (
      <div className={style.page}>
        <div className={style.sidebar}>
          <Sidebar title="YozmaTech" paragraph="elements"/>
        </div>
        <div className={style.tablecContainer}>
          <Table props={headers} data={TableData} />
        </div>
      </div>
  )
}

export default App;
