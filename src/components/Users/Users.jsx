import React from "react";
import style from './Users.module.css';
import axios from "axios";
import Userphoto from "../../assets/images/user.png"

let Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=> {
                props.setUsers(response.data.items);
            });
        }
    }
    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {
                props.users.map(u => <div key={u.id}>
                 <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : Userphoto} className={style.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button> : <button onClick={() => {
                            props.follow(u.id)
                        }}>follow</button>}
                    </div>
                 </span>

                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>   
                    <span>

                    </span>   
                 </span>
                </div>)
            }

        </div>
    )
}

export default Users;