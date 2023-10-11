import React from "react";
import style from "./MyPosts.module.css"
import Post from "./Post/Post";
import { addPostActionCreation, updatePostTextActionCreation} from "../../../redux/state";


const MyPosts = (props) => {
  
  let postElements = props.postsData.map(p => <Post id={p.id} message={p.message} likescount={p.likescount} />);
  let newPostElement = React.createRef();


  let addPost = () =>{
    props.dispatch(addPostActionCreation())
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updatePostTextActionCreation(text);
    props.dispatch(action)
  }


  return (

    <div className={style.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div>
        {postElements}
      </div>
    </div>
  );
};

export default MyPosts;
