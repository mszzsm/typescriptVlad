import React from 'react';
import style from './Modal.css'

interface Modal {
    name: string,
    phone: string,
    project: string,
    date: string
}

let user: any = []
const handleSubmit = (event: any) => {
    event.preventDefault();
    let Users = JSON.parse(localStorage.getItem('data')|| '{}')
    let newUser = {
        id: Users.length,
        user: event.target.name.value,
        phone: event.target.phone.value,
        project: event.target.project.value,
        date: event.target.date.value,
        picture: "https://picsum.photos/id/600/40",
        status: "new",
    }
    Users.push(newUser)
    localStorage.setItem('data', JSON.stringify(Users));
    window.location.reload(false);
};


const Modal = () => {
    return (
        <div className={'modal'}>
            <form action="" className={'form'} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Name
                        <input value={user.name} type="text" id="name"/>
                    </label>
                </div>
                <div>
                    <label htmlFor="">Phone
                        <input value={user.phone} type="text" id="phone"/>
                    </label>
                </div>
                <div>
                    <label htmlFor="">Project
                        <input value={user.project} type="text" id="project"/>
                    </label>
                </div>
                <div>
                    <label htmlFor="">date
                        <input value={user.date} type="text" id="date"/>
                    </label>
                </div>
                <input type="submit" name="Add new user"/>
            </form>
        </div>
    )
}

export default Modal