import React, {useEffect} from "react";
import Profile from "./Profile";
import axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";

function ProfileContainer (props) {

    const {id}  = useParams();
    let currUserId = id||2


    useEffect(()=> {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + currUserId)
            .then(response=> {
            props.setUserProfile(response.data);
        });
    },[id]);


        return (
            <Profile profile={props.profile} />
        );


};

let mapStateToProps = (state) => ({
    profile: state.profilesPage.profile
})


export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);
