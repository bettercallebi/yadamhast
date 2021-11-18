import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginView from "./view/loginview/LoginView";
import SignupView from './view/signupview/SignupView';
import HomeView from './view/homeview/HomeView';

function App() {
    return (
        <div>
            <HomeView/>
        </div>
    );
}

export default App;
