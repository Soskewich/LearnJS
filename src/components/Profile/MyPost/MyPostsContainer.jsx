import React from "react";
import style from "./MyPosts.module.css"
import Post from "./Post/Post";
import { addPostActionCreation, updatePostTextActionCreation} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";



let mapStateToProps = (state) => {
  return {
      postsData: state.profilesPage.postsData,  
      newPostText: state.profilesPage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updatePostTextActionCreation(text);
      dispatch(action)
    },

    addPost: () => {
      dispatch(addPostActionCreation())
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
