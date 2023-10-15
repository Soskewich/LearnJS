import {combineReducers, createStore} from 'redux'
import profileReducer from "./profile-reducer";
import diaolgsReducer from "./dialogs-reducer";
import usersReducer from './users-reducer';

let reducers = combineReducers({
    profilesPage: profileReducer,
    messagesPage: diaolgsReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);


export default store;