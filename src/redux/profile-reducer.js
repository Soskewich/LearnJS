import state from "./state";
const ADD_POST = "ADD-POST"
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const profileReducer = (state, action) => {

    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likescount: 100
            };
            state.postsData.push(newPost);
            state.newPostText = ''
            return state;

        case UPDATE_POST_TEXT:
            state.newPostText = action.newText
            return state;
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