import logo from './logo.svg';
import React from "react";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import style from './App.css';
import {Route, Router, Routes} from "react-router-dom";




const App = (props) => {
    
    return (
        <main>
            <div className='app-wrapper'>
                    <Header/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Routes>


                            <Route exact path='/profile' element={<Profile 
                            profilesPage={props.state.profilesPage} 
                            addPost={props.addPost} 
                            updatePostText={props.updatePostText}/>}/>,



                            <Route exact path="/dialogs" element={<Dialogs state={props.state.messagesPage} />}/>

                            
                        </Routes>
                    </div>
            </div>
        </main>
    );
}

export default App;


