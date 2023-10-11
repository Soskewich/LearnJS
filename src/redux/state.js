const ADD_POST = "ADD-POST"
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
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
    
    
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){
        if (action.type===ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilesPage.newPostText,
                likescount: 100
            }
            this._state.profilesPage.postsData.push(newPost);
            this._state.profilesPage.newPostText = ''
            this._callSubscriber(this._state);
        }
        else if (action.type===UPDATE_POST_TEXT){
            this._state.profilesPage.newPostText = action.newText
            this._callSubscriber(this._state);
        }
    }
}

 export const addPostActionCreation = () => {
    return {
      type: ADD_POST
    }
  }
  
  export const updatePostTextActionCreation = (text) => {
    return {
      type: UPDATE_POST_TEXT, newText: text
    }
  }








  export default store;

