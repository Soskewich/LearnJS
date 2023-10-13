import React from "react";
import style from "./MyPosts.module.css"
import Post from "./Post/Post";
import { addPostActionCreation, updatePostTextActionCreation} from "../../../redux/profile-reducer";


const MyPosts = (props) => {
  
  let postElements = props.postsData.map(p => <Post id={p.id} message={p.message} likescount={p.likescount} />);
  let newPostElement = React.createRef();


  let onAddPost = () =>{
      props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }


  return (

    <div className={style.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div>
        {postElements}
      </div>
    </div>
  );
};

export default MyPosts;
