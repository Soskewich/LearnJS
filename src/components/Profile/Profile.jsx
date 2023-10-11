import React from "react";
import style from "./Profile.module.css"
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.profilesPage.postsData} newPostText={props.profilesPage.newPostText} dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile;
 