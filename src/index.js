import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

let postData = [
    
  {id: 1, message: 'its my first post', likescount: 12},
  {id: 2, message: 'its my second post', likescount: 18},
  {id: 3, message: 'its my thirty post', likescount: 24}

]

let dialogsData = [
  {id: 1, name:"Tema"},
  {id: 2, name:"Valera"},
  {id: 3, name:"Serega"},
  {id: 4, name:"Danik"},
]

let messageData = [
  {id: 1, message:"hi"},
  {id: 2, message:"HI"},
  {id: 3, message:"Hello"},
  {id: 4, message:"Hello!"},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
    <App postData={postData} messageData={messageData} dialogsData={dialogsData} />
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
