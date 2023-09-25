import React from "react";
import style from "./Profile.module.css"
import MyPosts from "./MyPost/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://w.forfun.com/fetch/5d/5d94ad27b68ed87ab6bda49e3b90f923.jpeg"></img>
            </div>
            <div>ava</div>
            <MyPosts/>
        </div>
    );
};

export default Profile;
