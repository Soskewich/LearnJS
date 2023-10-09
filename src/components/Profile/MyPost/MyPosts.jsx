import React from "react";
import style from "./MyPosts.module.css"
import Post from "./Post/Post";
const MyPosts = (props) => {
  
  
  
  let postElements = props.postData.map(p => <Post id={p.id} message={p.message} likescount={p.likescount} />);

  return (

    <div className={style.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div>
        {postElements}
      </div>
    </div>
  );
};

export default MyPosts;
