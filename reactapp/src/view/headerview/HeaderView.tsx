import React, {Component} from 'react';
import {Navbar, Container, Card, Table, Button, Nav} from 'react-bootstrap';
import CommonUtil from "../../CommonUtil";
import './HeaderView.css';
import {Link} from 'react-router-dom';


export interface HomeViewProps {
}

export interface HomeViewState {
    isLoggedIn: boolean
    isAdminLoggedIn: boolean
}

class HomeView extends Component<HomeViewProps, HomeViewState> {
    constructor(props: any) {
        super(props);
        this.state={
            isAdminLoggedIn:true,
            isLoggedIn:true,
        } as HomeViewState;
    }

    render() {
        return (
            <div className={'header-view'}>
                <Navbar style={{backgroundColor:'#bfbfbf'}}>
                    <Container className={'nav-container'}>
                        <Link className={'navbar-brand'} to={"/home"}>
                            {' '}
                            {CommonUtil.getPhrase('app')}
                        </Link>
                        {/*Below code is for check user login*/}
                        {
                            this.state.isLoggedIn ?
                                (this.state.isAdminLoggedIn ? this.adminLoggedNav() : this.loggedNav())
                                : this.notLoggedNav()
                        }
                    </Container>
                </Navbar>
            </div>
        );
    }

    notLoggedNav() {
        return (
            <>
                <Nav className={'nav'}>
                    <Link className={'nav-link'} to={"/home"}>{CommonUtil.getPhrase('home')}</Link>
                    <Link className={'nav-link'} to={"/signup"}>{CommonUtil.getPhrase('signup')}</Link>
                    <Link className={'nav-link'} to={"/login"}>{CommonUtil.getPhrase('login')}</Link>
                </Nav>
            </>
        );
    }

    loggedNav() {
        return (
            <>
                <Nav className={'nav'}>
                    <Link className={'nav-link'} to={"/home"}>{CommonUtil.getPhrase('home')}</Link>
                    <Link className={'nav-link'} to={"/tasks"}>{CommonUtil.getPhrase('taskList')}</Link>
                    <Link className={'nav-link'} to={"/profile"}>{CommonUtil.getPhrase('profile')}</Link>
                    <Link className={'nav-link'} to={"/login"}>{CommonUtil.getPhrase('logout')}</Link>
                </Nav>
            </>
        );
    }

    adminLoggedNav() {
        return (
            <>
                <Nav className={'nav'}>
                    <Link className={'nav-link'} to={"/home"}>{CommonUtil.getPhrase('home')}</Link>
                    <Link className={'nav-link'} to={"/users"}>{CommonUtil.getPhrase('userList')}</Link>
                    <Link className={'nav-link'} to={"/tasks"}>{CommonUtil.getPhrase('taskList')}</Link>
                    <Link className={'nav-link'} to={"/profile"}>{CommonUtil.getPhrase('profile')}</Link>
                    <Link className={'nav-link'} to={"/login"}>{CommonUtil.getPhrase('logout')}</Link>
                </Nav>
            </>
        );
    }
}

export default HomeView;