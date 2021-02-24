import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import styles from "./Table.css";
import store from "../state/state.module.js";
import { useData } from "../data/useData";

type Table = {
  props: string[];
  storage?: object;
  store?: object;
};

//localStorage.setItem('data', JSON.stringify(store._state.UsersData));

const Table: React.FC<Table> = ({ props, storage }) => {
  const {userData, removeUserById} = useData();

  const getUserStatus = (status: string) => {
    switch (status) {
      case "new":
        return 'statusNew';
      case "reported":
        return 'statusReported';
      case "blocked":
        return 'statusBlocked';
      case "converted":
        return 'statusConverted';
      default:
        break;
    }
  };

  const [modalIsVisible, setModalIsVisible] = useState(false)

  const listItems = props.map((headers) => <th>{headers}</th>);

  const Users = userData.map((user, key) => (
  
    <tr>
      <th>
        <img src={JSON.parse(user).picture} />
      </th>
      <th>
        {JSON.parse(user).user}{" "}
        <span className={getUserStatus(JSON.parse(user).status)}>{user.status}</span>{" "}
      </th>
      <th>{JSON.parse(user).phone}</th>
      <th>{JSON.parse(user).project}</th>
      <th>{JSON.parse(user).date}</th>
      <th>
        <button
          className={'btnDelete'}
          onClick={(event) => {
            removeUserById(JSON.parse(user).id);
          }}
        >
          DELETE USER
        </button>
      </th>
    </tr>
  ));

  return (
    <div className={'tableHeader'}>
      <div>
        <h1>My Leads</h1>
        <button
          onClick={(event) => {
            setModalIsVisible(true)
          }}>
          add User
        </button>
      </div>
      <hr></hr>
      <div className={'tableBody'}>
        <div className="tableContainer">
          <table>
            <thead>
              <tr>{listItems}</tr>
            </thead>
            <tbody>{Users}</tbody>
          </table>
        </div>
        {modalIsVisible && <div>
          <Modal />
        </div>}
      </div>
    </div>
  );
};

export default Table;
