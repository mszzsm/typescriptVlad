import React from 'react';
import Table from './components/Table';
import Sidebar from './components/Sidebar';
import style from './App.css';
import { type } from 'os';

interface IState {
  store?: object;
  storage?: object;
}

const App: React.FC = (props) => {
  const headers = ["","name","mobile no","project name", "date","",""];
 
  return (
      <div className={style.page}>
        <div className={style.value}>
          <Sidebar title="YozmaTech" paragraph="elements"/>
        </div>
        <div className={style.value}>
          <Table props={headers} />
        </div>
      </div>
  )
}

export default App;
