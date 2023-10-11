import {getMessage} from "@testing-library/jest-dom/dist/utils";

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
        }

    },
    getState(){
        return this._state
    },
    _callSubscriber(){
        console.log('change done')
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilesPage.newPostText,
            likescount: 100
        }
        this._state.profilesPage.postsData.push(newPost);
        this._state.profilesPage.newPostText = ''
        this._callSubscriber(this._state);
    },
    updatePostText(newText){
        this._state.profilesPage.newPostText = newText
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}










  export default store;

