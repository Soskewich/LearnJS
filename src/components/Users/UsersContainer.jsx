import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    unfollow,
    toggleIsFetching
} from "../../redux/users-reducer";
import axios from "axios";
import preloader from '../../assets/images/preloader.svg';
import {getUsers} from "../../api/api";

class UsersContainer extends React.Component{
    componentDidMount() {
        this.props.toggleIsFetching(true);
        getUsers(this.props.currentPage, this.props.pageSize ).then(data=> {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)

        getUsers(pageNumber, this.props.pageSize ).then(data=> {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items);
        });
    }

    render(){

        return <>   
            {this.props.isFetching ? <img src={preloader}/> : null}
               <Users totalUserCount={this.props.totalUserCount}
                      pageSize = {this.props.pageSize}
                      currentPage = {this.props.currentPage}
                      onPageChanged = {this.onPageChanged}
                      users={this.props.users}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
        />
        </>
        
    }
}

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

/*let mapDispatchToProps = (dispatch) => {
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
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))

        },

    }
}*/



export default connect(mapStateToProps, { 
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount, 
    toggleIsFetching,
}
    )(UsersContainer);

