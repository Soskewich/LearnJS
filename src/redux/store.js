import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilesPage:{
            postsData: [

                {id: 1, message: 'its my first post', likescount: 12},
                {id: 2, message: 'its my second post', likescount: 18},
                {id: 3, message: 'its my thirty post', likescount: 24},

            ],

            newPostText:"write text"



        },
        messagesPage: {
            messageData: [
                {id: 1, message:"hi"},
                {id: 2, message:"HI"},
                {id: 3, message:"Hello"},
                {id: 4, message:"Hello!"},
            ],
            dialogsData: [
                {id: 1, name:"Tema"},
                {id: 2, name:"Valera"},
                {id: 3, name:"Serega"},
                {id: 4, name:"Danik"},
            ],
            newMessageText: ''
        },
        sidebar: {}
    },
    getState(){
        return this._state
    },
    _callSubscriber(){
        console.log('change done')
    },
    
    
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){

        this._state.profilesPage = profileReducer(this._state.profilesPage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);

    }
}











  export default store;

