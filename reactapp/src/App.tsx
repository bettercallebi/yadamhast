import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginView from "./view/loginview/LoginView";
import SignupView from './view/signupview/SignupView';
import HomeView from './view/homeview/HomeView';
import UserListView from "./view/userlistview/UserListView";
import TaskListView from "./view/tasklistview/TaskListView";
import ProfileView from "./view/profileview/ProfileView";
import TaskNewView from "./view/tasknewview/TaskNewView";

function App() {
    return (
        <Router>
            <Routes>
                <Route path={'/'} element={<HomeView/>}/>
                <Route path={'/home'} element={<HomeView/>}/>
                <Route path={'/login'} element={<LoginView/>}/>
                <Route path={'/signup'} element={<SignupView/>}/>
                <Route path={'/users'} element={<UserListView/>}/>
                <Route path={'/tasks'} element={<TaskListView/>}/>
                <Route path={'/profile'} element={<ProfileView/>}/>
                <Route path={'/newTask'} element={<TaskNewView/>}/>
            </Routes>
        </Router>
    );
}

export default App;
