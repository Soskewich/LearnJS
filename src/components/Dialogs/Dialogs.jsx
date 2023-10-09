import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
    

    let dialogsElements = props.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messageElemnts = props.messageData.map( message =>  <Message message={message.message} id={message.id}/>);
    
    
    const [Active, setActive] = useState(false);
    return(
        <div className={style.dialogs}>
            <div className={Active ? style.dialogsItems + ' ' + style.active: style.dialogsItems }>

                {dialogsElements}

                

            </div>
            <div className={style.messages}>
                
                {messageElemnts}
            </div>

        </div>

    )
}

export default Dialogs