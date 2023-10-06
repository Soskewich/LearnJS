import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import React, {useState} from "react";

const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id
    return(

            <div className={style.dialog + ' ' + style.active}>
                <NavLink to={path}> {props.name} </NavLink>
            </div>

    )
}

const Message = (props) => {
    return(
    <div className={style.message}>
        {props.message}
    </div>
    )
}




const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name:"Tema"},
        {id: 2, name:"Valera"},
        {id: 3, name:"Serega"},
        {id: 4, name:"Danik"},
    ]

    const [Active, setActive] = useState(false);
    return(
        <div className={style.dialogs}>
            <div className={Active ? style.dialogsItems + ' ' + style.active: style.dialogsItems }>
                <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogsItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogsItem name="Valera" id="2"/>
                <DialogsItem name="Serega" id="3"/>
                <DialogsItem name="Danik" id="4"/>

            </div>
            <div className={style.messages}>
                <Message message="hi"/>
                <Message message="HI!!!"/>
                <Message message="Hello!"/>

            </div>

        </div>

    )
}

export default Dialogs