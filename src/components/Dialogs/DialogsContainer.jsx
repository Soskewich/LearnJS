import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().messagesPage



    let onSendMessageClick = () =>{
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (text) => {
        props.store.dispatch(updateMessageTextActionCreator(text))
    }

    return(
        <Dialogs updateMessageText={onNewMessageChange} sendMessage={onSendMessageClick}
                 messagesPage={props.store.getState().messagesPage}/>

    )
}

export default DialogsContainer