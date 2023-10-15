import style from './Dialogs.module.css';
import {NavLink, matchRoutes} from "react-router-dom";
import React, {useState} from "react";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let state = props.messagesPage

    let dialogsElements = state.dialogsData.map( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);
    let messageElemnts = state.messageData.map( message =>  <Message message={message.message} key={message.id} id={message.id}/>);
    let newMessageElemnts = state.newMessageText;

    let onSendMessageClick = () =>{
        props.sendMessage()

    }
    let onNewMessageChange = (event) => {
        let text = event.target.value;
        props.updateMessageText(text);
    }
    const [Active, setActive] = useState(false);
    return(
        <div className={style.dialogs}>
            <div className={Active ? style.dialogsItems + ' ' + style.active: style.dialogsItems }>

                {dialogsElements}

            </div>
            <div className={style.messages}>
                <div>{messageElemnts}</div>
                <div>
                    <div><textarea value={newMessageElemnts}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter u message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>

        </div>

    )
}

export default Dialogs