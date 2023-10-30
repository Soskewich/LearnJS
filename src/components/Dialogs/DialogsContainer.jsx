import {sendMessageCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from 'react-redux';
import {withAuthNavigate} from "../../hoc/withAuthNavigate";



let mapStateToProps = (state) => {
    return{
        messagesPage: state.messagesPage,
        isAuth: state.auth.isAuth
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


let AuthNavigateComponent = withAuthNavigate(Dialogs);


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthNavigateComponent)

export default DialogsContainer