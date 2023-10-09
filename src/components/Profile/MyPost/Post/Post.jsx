import React from "react";
import style from "./Post.module.css"
const Post = (props) => {
  
  
  
  return (

        <div className={style.item}>
            <img src="https://cdni.comss.net/logo/Telegram.png" alt=""/>
            {props.message}
            <div>
              <span>likes:</span> {props.likescount}
            </div>
        </div>

  );
};

export default Post;
