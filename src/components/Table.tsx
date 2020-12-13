import React from 'react';
import './Table.module.css';

interface Table {
    props: string[];
    data: object;
}

console.log('TABLE COMPONENT')

const Table = ({props, data}: Table) => {

const listItems = props.map((headers) => <th>{headers}</th> );
const UserDatas = Object.values(data).map((x) => x);
const Users = UserDatas.map((user) => <tr><th>{user[0]}</th><th>{user[1]}</th><th>{user[2]}</th><th>{user[3]}</th><th>...</th></tr>);

return (
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
    </div>
)
}

export default Table;