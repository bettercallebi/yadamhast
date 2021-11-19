import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginView from "./view/loginview/LoginView";
import SignupView from './view/signupview/SignupView';
import HomeView from './view/homeview/HomeView';
import WelcomeView from "./view/welcomeview/WelcomeView";
import UserListView from "./view/userlistview/UserListView";
import TaskListView from "./view/tasklistview/TaskListView";
import HeaderView from "./view/headerview/HeaderView";
import FooterView from "./view/footerview/FooterView";

function App() {
    return (
        <Router>
            <Routes>
                <Route path={'/'} element={<WelcomeView/>}/>
                <Route path={'/home'} element={<HomeView/>}/>
                <Route path={'/login'} element={<LoginView/>}/>
                <Route path={'/signup'} element={<SignupView/>}/>
                <Route path={'/users'} element={<UserListView/>}/>
                <Route path={'/tasks'} element={<TaskListView/>}/>
                <Route path={'/profile'} element={<SignupView/>}/>
            </Routes>
        </Router>
    );
}

export default App;
