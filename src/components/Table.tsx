import React from 'react';
import Modal from './Modal'
import style from './Table.module.css';
import store from '../state/state.module.js'

interface Table {
    props: string[];
    data: object;
    storage?: object;
    store?: object;
}

//localStorage.setItem('data', JSON.stringify(store._state.UsersData));

const Table = ({props, data, storage}: Table) => {
    const deleteUser = (x: any, key:any) =>  {
        delete UserDatas[key]
        let filtered = UserDatas.filter(function (el: any) {
            return el != null;
        });
        console.log(filtered);
        localStorage.setItem('data', JSON.stringify(filtered));
        window.location.reload(false);
    };

    let modal = false

    const openModal = () => {
        console.log(modal)
        modal = !modal;
    }


    const UserDatas = JSON.parse(localStorage.getItem('data') || '{}')
    const listItems = props.map((headers) => <th>{headers}</th> );
    const Users = UserDatas.map((user: any, key: any) => <tr>
                <th><img src={user.picture}/>{user.user}</th>
                <th>{user.phone}</th>
                <th>{user.project}</th>
                <th>{user.date}</th>
                <th>
                    <button onClick={(event: any) => {deleteUser(user, key)}}> 
                    DELETE USER
                    </button>
                </th>
            </tr>);


    return (
        <div className={style.tableHeader}>
            <div>
                <h1>My Leads</h1>
                <button onClick={(event: any) => {openModal()}}>add User</button>
            </div>
            <hr></hr>
            <div className={style.tableBody}>
            <div className="tableContainer">
                <table>
                    <thead>
                    <tr>
                        {listItems}
                    </tr>
                    </thead>
                    <tbody>
                        {Users}
                    </tbody>
                </table>
                modal == true ?:<Modal/> 
            </div>
            </div>
        </div>
    )
}

export default Table;