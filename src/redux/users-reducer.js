import state from "./store";
const FOLLOW = "FOLLOW"
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState =
{
    users: [],
// {id: 1, photoUrl: 'https://alaska-native-news.com/wp-content/uploads/lawandcommon/sos.jpg', followed: false, fullName: 'Vlad',  status:"Im Soskewich!", location: {city: "Omsk", country: "Russia" }},
// {id: 2, photoUrl: 'https://alaska-native-news.com/wp-content/uploads/lawandcommon/sos.jpg', followed: true, fullName: 'Tema', status:"Im Soskewich!", location: {city: "Omsk", country: "Russia" }},
// {id: 3, photoUrl: 'https://alaska-native-news.com/wp-content/uploads/lawandcommon/sos.jpg', followed: false, fullName: 'Danik', status:"Im Soskewich!", location: {city: "Omsk", country: "Russia" }},
};

const usersReducer = (state = initialState, action) => {

    switch (action.type){
        case FOLLOW:
            return {
                ...state, 
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u;
                } )
            }
        case UNFOLLOW:
            return {
                ...state, 
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u;
                } )
            }
        case SET_USERS:{
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }

}

export const followAC = (userId) => {
    return {
        type: FOLLOW, userId
    }
}

export const unFollowAC = (userId) => {
    return {
        type: UNFOLLOW, userId
    }
}

export const setUsersAC = (users) => {
    return {
        type: SET_USERS, users
    }
}

export default usersReducer;