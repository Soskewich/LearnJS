import React from "react";
import style from "./Profile.module.css"
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.profilesPage.postsData} addPost={props.addPost} newPostText={props.profilesPage.newPostText} updatePostText={props.updatePostText}/>
        </div>
    );
};

export default Profile;
