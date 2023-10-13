import {combineReducers, createStore} from 'redux'
import profileReducer from "./profile-reducer";
import diaolgsReducer from "./dialogs-reducer";

let reducers = combineReducers({
    profilesPage: profileReducer,
    messagesPage: diaolgsReducer
});

let store = createStore(reducers);


export default store;