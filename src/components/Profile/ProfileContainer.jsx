import React from "react";
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withAuthNavigate} from "../../hoc/withAuthNavigate";



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = 2
        }

        this.props.getUserProfile(userId)
    }


    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let AuthNavigateComponent = withAuthNavigate(ProfileContainer);

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
