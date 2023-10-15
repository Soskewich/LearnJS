import {sendMessageCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
    return{
        messagesPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        updateMessageText: (text) => {
            dispatch(updateMessageTextActionCreator(text))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
            
        },

    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer