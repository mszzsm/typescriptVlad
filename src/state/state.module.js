const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const ADD_FRIEND = 'ADD-FRIEND'
const UPDATE_NEW_FRIEND_TEXT = 'UPDATE-NEW-FRIEND-TEXT'

const store = {
    _state: {
        UsersData : [
            { id:1, user : "User1", status : "", phone: "+38082374637", project : "Project1", date: "20.01.2020", picture : "https://picsum.photos/40/?random=1"},
            { id:2, user : "User2", status : "", phone: "+38082374637", project : "Project2", date: "20.11.2020", picture : "https://picsum.photos/40/?random=2"},
            { id:3, user : "User2", status : "", phone: "+38082374637", project : "Project2", date: "20.11.2020", picture : "https://picsum.photos/40/?random=3"},
            { id:4, user : "User2", status : "", phone: "+38082374637", project : "Project2", date: "20.11.2020", picture : "https://picsum.photos/40/?random=4"},
            { id:5, user : "User2", status : "", phone: "+38082374637", project : "Project2", date: "20.11.2020", picture : "https://picsum.photos/40/?random=5"},
        ],
        SideBar: {
        },
    },

    _callSubsriber() {
        console.log('something changed')
    },

    getState() {
        return this._state;
    },

    addUser() {
        return this.AddPost
    },
    deleteUser() {
        return this.AddPost
    },

    subscribe(observer) {
        this._callSubsriber = observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 4,
                user: 'Admin',
                msg: this._state.ProfilePage.postText,
                likes: 0
            }
            this._state.ProfilePage.msgData.push(newPost);
            this._state.ProfilePage.postText = ''
            this._callSubsriber(this._state);
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.ProfilePage.postText = action.text;
            this._callSubsriber(this._state);
        }
        else if (action.type === ADD_FRIEND) {
            let newFriend = {
                id: 1,
                name: this._state.navBar.friendText,
                img: 'https://picsum.photos/id/100/50/50',
            }
            this._state.navBar.Friends.push(newFriend);
            this._callSubsriber(this._state);
        }
        else if (action.type === UPDATE_NEW_FRIEND_TEXT) {
            this._state.friendText = action.text
        }

    },
    
}

export default store
window.store = store