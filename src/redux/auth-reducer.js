import state from "./store";
import {authAPI} from "../api/api";
import axios from "axios";
const SET_USER_DATA = "SET_USER_DATA"


let initialState =
    {
        id: null,
        email: null,
        login: null,
        isAuth: false

    }

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USER_DATA:{

            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        }

        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login) => {

    return {
        type: SET_USER_DATA, data: {id, email, login}
    }
}

export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me `, {
        withCredentials: true
    }).then(response=> {
        if (response.data.resultCode === 0 ){
            let {id, login, email} = response.data.data
            dispatch(setAuthUserData(id, email, login ));
        }
    });
}

export default authReducer;
