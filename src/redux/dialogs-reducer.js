import state from "./state";
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'
const diaolgsReducer = (state, action) => {
    switch (action.type){
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state
        case SEND_MESSAGE:
            let text = state.newMessageText
            state.newMessageText = '';
            state.messageData.push({id: 5, message: text})
            return state
        default:
            return state
    }
    if (action.type === UPDATE_MESSAGE_TEXT){


    }
    else if (action.type === SEND_MESSAGE){


    }
    return state;
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_MESSAGE_TEXT, newText: text
    }
}

export default diaolgsReducer;