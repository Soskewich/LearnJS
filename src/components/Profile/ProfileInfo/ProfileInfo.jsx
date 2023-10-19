import React from "react";
import style from "./ProfileInfo.module.css"
import preloader from "../../../assets/images/preloader.svg";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img src="https://w.forfun.com/fetch/5d/5d94ad27b68ed87ab6bda49e3b90f923.jpeg"></img>
            </div>
            <div>
                <img src={props.profile.photos.large}/>
                ava
            </div>
        </div>
    );
};

export default ProfileInfo;
