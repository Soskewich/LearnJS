import React from "react";
import style from './Users.module.css';
import axios from "axios";
import Userphoto from "../../assets/images/user.png"
import Users from "./Users";

class UsersAPIComponent extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response=> {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response=> {
            this.props.setUsers(response.data.items);
        });
    }

    render(){

        return <Users totalUserCount={this.props.totalUserCount}
                      pageSize = {this.props.pageSize}
                      currentPage = {this.props.currentPage}
                      onPageChanged = {this.onPageChanged}
                      users={this.props.users}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
        />
    }
}

export default UsersAPIComponent;