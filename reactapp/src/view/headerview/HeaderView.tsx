import React, {Component} from 'react';
import {Navbar, Container, Card, Table, Button, Nav} from 'react-bootstrap';
import CommonUtil from "../../CommonUtil";
import './HeaderView.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../logo.png'
import { faUserAlt, faHome,faSignOutAlt,faClipboardList ,faTasks,faIdCardAlt,faIdCard} from '@fortawesome/free-solid-svg-icons'

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
                        <Link style={{fontWeight:"bold"}} className={'navbar-brand'} to={"/home"}>
                            {' '}
                            <img width={45} src={logo}/>{'   '}
                            {CommonUtil.getPhrase('app')}{'  '}
                        </Link>
                        {'    '}
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
                    <Link className={'nav-link'} to={"/home"}><FontAwesomeIcon icon={faHome}/>{CommonUtil.getPhrase('home')}</Link>
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
                    <Link className={'nav-link'} to={"/home"}><FontAwesomeIcon icon={('user-secret')} />{CommonUtil.getPhrase('home')}</Link>
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
                    <Link className={'nav-link'} to={"/home"}><FontAwesomeIcon size={"2x"} icon={faHome}/></Link>{' '}
                    <Link className={'nav-link'} to={"/users"}><FontAwesomeIcon size={"2x"} icon={faIdCard}/></Link>{' '}
                    <Link className={'nav-link'} to={"/tasks"}><FontAwesomeIcon size={"2x"} icon={faTasks}/></Link>{' '}
                    <Link className={'nav-link'} to={"/profile"}><FontAwesomeIcon size={"2x"} icon={faUserAlt}/></Link>{' '}
                    <Link style={{left:'50px',position:"absolute"}} className={'nav-link'} to={"/login"}><FontAwesomeIcon size={"2x"} icon={faSignOutAlt}/></Link>
                </Nav>
            </>
        );
    }
}

export default HomeView;