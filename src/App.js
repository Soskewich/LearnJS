import React from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
    
    return (
        <main>
            <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route path='/profile/:id' element={<ProfileContainer />}/>,
                            <Route exact path="/dialogs" element={<DialogsContainer />}/>
                            <Route exact path="/users" element={<UsersContainer />}/>,
                            
                        </Routes>
                    </div>
            </div>
        </main>
    );
}

export default App;


