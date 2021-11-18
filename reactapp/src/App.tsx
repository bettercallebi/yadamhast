import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginView from "./view/loginview/LoginView";
import SignupView from './view/signupview/SignupView';
import HomeView from './view/homeview/HomeView';

function App() {
    return (
        <Router>
            <Routes>
                <Route path={'/home'} element={<HomeView/>}/>
                <Route path={'/login'} element={<LoginView/>}/>
                <Route path={'/signup'} element={<SignupView/>}/>
            </Routes>
        </Router>
    );
}

export default App;
