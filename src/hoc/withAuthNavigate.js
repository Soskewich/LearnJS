import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
// import {connect} from "react-redux";

//
// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Navigate } from "react-router-dom"
//
// export let AuthNavigate = (Component) => {
//     const checkAuth = useSelector(state => state.auth.isAuth);
//     class NavigateComponent extends React.Component {
//         render(){
//             return checkAuth ? <Component {...this.props}/>  :  <Navigate to={"/login"} />
//         }
//     }
//     return NavigateComponent
// }



// let mapStateToPropsForNavigate = (state) => ({
//     isAuth: state.auth.isAuth
// })
//
// export const withAuthNavigate = (Component) => {
//     class NavigateComponent extends React.Component {
//         render() {
//             if (!this.props.isAuth) return <Navigate to={'/login'} />
//
//             return <Component {...this.props} />
//         }
//     }
//     let ConnectAuthNavigateComponent = connect(mapStateToPropsForNavigate)(NavigateComponent)
//     return ConnectAuthNavigateComponent;
// }


let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth

})

export const withAuthNavigate = (Component) => {
    let redirectComponent = (props) =>  {
        if (!props.isAuth) return <Navigate to={'/login'} />
        return <Component {...props} />
    }


    let ConnectedAuthNavigateComponent = connect(mapStateToPropsForRedirect)(redirectComponent)

    return ConnectedAuthNavigateComponent
}