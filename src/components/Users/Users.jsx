import React from "react";
import style from './Users.module.css';

let Users = (props) => {
    if (props.users.length === 0){
    props.setUsers(
        [
        {id: 1, photoUrl: 'https://alaska-native-news.com/wp-content/uploads/lawandcommon/sos.jpg', followed: false, fullName: 'Vlad',  status:"Im Soskewich!", location: {city: "Omsk", country: "Russia" }},
        {id: 2, photoUrl: 'https://alaska-native-news.com/wp-content/uploads/lawandcommon/sos.jpg', followed: true, fullName: 'Tema', status:"Im Soskewich!", location: {city: "Omsk", country: "Russia" }},
        {id: 3, photoUrl: 'https://alaska-native-news.com/wp-content/uploads/lawandcommon/sos.jpg', followed: false, fullName: 'Danik', status:"Im Soskewich!", location: {city: "Omsk", country: "Russia" }},
        ]
    )
}
    return (
        <div>
            {
            props.users.map( u => <div key={u.id}> 
                 <span>
                    <div>
                        <img src={u.photoUrl} className={style.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={ () => {props.unfollow(u.id)}}>Follow</button> : <button onClick={ () => {props.follow(u.id)}}>Unfollow</button> }
                    </div>
                 </span>

                 <span>
                    <span>
                        <div>{u.fullname}</div>
                        <div>{u.status}</div>
                    </span>   
                    <span>
                        <div>{u.location.country}</div>    
                        <div>{u.location.city}</div>
                    </span>   
                 </span>
            </div>)
            }
        
        </div>
    )
}

export default Users;