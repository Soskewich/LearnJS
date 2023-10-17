import React from "react";
import { connect } from "react-redux";
import UsersAPIComponent from "./Users";
import {
    followAC,
    setCurrentPageAC,
    setUsersTotalCountAC,
    setUsersAC,
    unFollowAC
} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unFollowAC(userId))
            
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
            
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))

        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))

        },

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

export default UsersContainer;

