import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData()
    }
    render() {
        return <Header {...this.props}/>
    }
}

let AuthNavigateComponent = (props) => {
    if (!this.props.isAuth) return <Navigate to={'/login'} />;
    return <HeaderContainer {...props} />
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});
export default connect(mapStateToProps, {getAuthUserData} )(AuthNavigateComponent);
