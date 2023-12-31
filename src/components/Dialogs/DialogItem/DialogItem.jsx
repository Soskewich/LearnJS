import style from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import React, {useState} from "react";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return(

            <div className={style.dialog + ' ' + style.active}>
                <NavLink to={path}> {props.name} </NavLink>
            </div>

    )
}

export default DialogItem