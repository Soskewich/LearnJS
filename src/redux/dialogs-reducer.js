import state from "./store";
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
}
const diaolgsReducer = (state = initialState, action) => {

    switch (action.type){

        case UPDATE_MESSAGE_TEXT:
            return {...state,
                newMessageText: action.newText
            };

        case SEND_MESSAGE:
            let text = state.newMessageText
            return {
                ...state,
                newMessageText: '',
                messageData: [...state.messageData, {id: 5, message: text}]
            };
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_MESSAGE_TEXT, newText: text
    }
}

export default diaolgsReducer;