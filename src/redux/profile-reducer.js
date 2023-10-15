import state from "./store";
const ADD_POST = "ADD-POST"
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

let initialState =
{
    postsData: [

        {id: 1, message: 'its my first post', likescount: 12},
        {id: 2, message: 'its my second post', likescount: 18},
        {id: 3, message: 'its my thirty post', likescount: 24},

    ],
        newPostText:"write text"
}

const profileReducer = (state = initialState, action) => {

    switch (action.type){
        case ADD_POST:{
            let newPost = {
                id: 5,
                message: state.newPostText,
                likescount: 100
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            
            };
        }

        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        default:
            return state;
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

export default profileReducer;