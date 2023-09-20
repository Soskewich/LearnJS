import React from "react";
import classes from "./Profile.module.css"
const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src="https://w.forfun.com/fetch/5d/5d94ad27b68ed87ab6bda49e3b90f923.jpeg"></img>
      </div>
      <div>ava</div>
      <div>My post</div>
      <div>New post</div>
      <div className="post">
        <div className="item">post 1</div>
        <div className="item">post 2</div>
        <div className="item">post 3</div>
      </div>
    </div>
  );
};

export default Profile;
