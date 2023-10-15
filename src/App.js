import React from "react";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
    
    return (
        <main>
            <div className='app-wrapper'>
                    <Header/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route exact path='/profile' element={<Profile store={props.store} />}/>,
                            <Route exact path="/dialogs" element={<DialogsContainer store={props.store} />}/>
                            <Route exact path="/users" element={<UsersContainer />}/>,
                            
                        </Routes>
                    </div>
            </div>
        </main>
    );
}

export default App;


