import {applyMiddleware, combineReducers, createStore} from 'redux'
import profileReducer from "./profile-reducer";
import diaolgsReducer from "./dialogs-reducer";
import usersReducer from './users-reducer';
import authReducer from "./auth-reducer";
import ThunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    profilesPage: profileReducer,
    messagesPage: diaolgsReducer,
    usersPage: usersReducer,
    auth: authReducer,

});

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));


export default store;