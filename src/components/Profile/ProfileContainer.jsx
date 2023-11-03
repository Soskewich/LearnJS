import React from "react";
// import Profile from "./Profile";
import {getUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
// import {withAuthNavigate} from "../../hoc/withAuthNavigate";
// import {Navigate} from "react-router-dom";
// import { AuthNavigate } from '../../hoc/AuthNavigate';
import {withAuthNavigate} from "../../hoc/withAuthNavigate";



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = 2
        }

        this.props.getUserProfile(userId)
    }



}

// let AuthNavigateComponent = AuthNavigate(Profile)
// return (<AuthNavigateComponent  profile = {store}/>)



let AuthNavigateComponent = withAuthNavigate(ProfileContainer)




// let AuthNavigateComponent = (props) => {
//     if (!this.props.isAuth) return <Navigate to='/login' />
//     return <ProfileContainer {...props} />
// }



// let AuthNavigateComponent = withAuthNavigate(ProfileContainer);


let mapStateToProps = (state) => ({
    profile: state.profilesPage.profile,
})


export default connect(mapStateToProps, {getUserProfile})(AuthNavigateComponent);


//
// function ProfileContainer (props) {
//
//     const {id}  = useParams();
//     let currUserId = id||2
//
//
//     useEffect(()=> {
//         usersAPI.getProfile(currUserId).then(response=> {
//             this.props.setUserProfile(response.data);
//         });
//     },[id]);
//
//
//         return (
//             <Profile profile={props.profile} />
//         );
//
//
// };
//
// let mapStateToProps = (state) => ({
//     profile: state.profilesPage.profile
// })
//
//
// export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);
