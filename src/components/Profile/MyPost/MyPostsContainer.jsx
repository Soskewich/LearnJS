import React from "react";
import style from "./MyPosts.module.css"
import Post from "./Post/Post";
import { addPostActionCreation, updatePostTextActionCreation} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

  let state = props.store.getState()

  let addPost = () =>{
    props.store.dispatch(addPostActionCreation())
  }

  let onPostChange = (text) => {
    let action = updatePostTextActionCreation(text);
    props.store.dispatch(action)
  }


  return (
      <MyPosts updateNewPostText={onPostChange} addPost={addPost} postsData={state.profilesPage.postsData}
               newPostText={state.profilesPage.newPostText}
      />
  );
};

export default MyPostsContainer;
