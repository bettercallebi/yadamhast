import React, {Component} from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import CommonUtil from "../../CommonUtil";
import './HeaderView.css';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import logo from '../../logo.png'
import {
    faHome,
    faIdCard,
    faSignIn,
    faSignOutAlt,
    faTasks,
    faUserAlt,
    faUserPlus
} from '@fortawesome/free-solid-svg-icons'

export interface HeaderViewProps {

}

export interface HeaderViewState {
    isLoggedIn: boolean;
    isAdminLoggedIn: boolean;
    user: any;
}

class HeaderView extends Component<HeaderViewProps, HeaderViewState> {
    constructor(props: any) {
        super(props);
        this.state = {
            isAdminLoggedIn: false,
            isLoggedIn: false,
            user: {}
        } as HeaderViewState;
    }

    componentDidMount() {
        let u = localStorage.getItem('user') || '{}';
        let userModel = {
            firstName: JSON.parse(u).firstName,
            lastName: JSON.parse(u).lastName,
            username: JSON.parse(u).username,
            id: JSON.parse(u).id,
            userType: JSON.parse(u).userType
        }
        this.setState({
            user: userModel
        });
        if (userModel.id != null) {
            this.setState({isLoggedIn: true});
            if (userModel.userType === 'ADMIN') {
                this.setState({isAdminLoggedIn: true});
            }
        }
    }

    render() {
        return (
            <div className={'header-view'}>
                <Navbar style={{backgroundColor: '#bfbfbf'}}>
                    <Container className={'nav-container'}>
                        <Link style={{fontWeight: "bold"}} className={'navbar-brand'} to={"/home"}>
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
                    <Link className={'nav-link'} to={"/home"}><FontAwesomeIcon size={"2x"} icon={faHome}/></Link>{' '}
                    <Link className={'nav-link'} to={"/login"}>
                        <FontAwesomeIcon size={"2x"} icon={faSignIn}/>
                    </Link>
                    <Link className={'nav-link'} to={"/signup"}><FontAwesomeIcon size={"2x"}
                                                                                 icon={faUserPlus}/></Link>{' '}
                </Nav>
            </>
        );
    }

    loggedNav() {
        return (
            <>
                <Nav className={'nav'}>
                    <Link className={'nav-link'} to={"/home"}><FontAwesomeIcon size={"2x"} icon={faHome}/></Link>{' '}
                    <Link className={'nav-link'} to={"/tasks"}><FontAwesomeIcon size={"2x"}
                                                                                icon={faTasks}/></Link>{' '}
                    <Link className={'nav-link'} to={"/profile"}><FontAwesomeIcon size={"2x"}
                                                                                  icon={faUserAlt}/>
                    </Link>
                    <Link className={'nav-link'} to={"/profile"}>{' '+ this.state.user?this.state.user.firstName+' '+this.state.user.lastName:''}</Link>

                    <Link onClick={event => {
                        localStorage.clear();
                    }} style={{left: '50px', position: "absolute"}} className={'nav-link'}
                          to={"/login"}><FontAwesomeIcon size={"2x"} icon={faSignOutAlt}/></Link>
                </Nav>
            </>
        );
    }

    adminLoggedNav() {
        return (
            <>
                <Nav className={'nav'}>
                    <Link className={'nav-link'} to={"/home"}><FontAwesomeIcon size={"2x"} icon={faHome}/></Link>{' '}
                    <Link className={'nav-link'} to={"/users"}><FontAwesomeIcon size={"2x"}
                                                                                icon={faIdCard}/></Link>{' '}
                    <Link className={'nav-link'} to={"/tasks"}><FontAwesomeIcon size={"2x"} icon={faTasks}/></Link>{' '}
                    <Link className={'nav-link'} to={"/profile"}><FontAwesomeIcon size={"2x"} icon={faUserAlt}/></Link>
                    <Link className={'nav-link'} to={"/profile"}>{' '+ this.state.user?this.state.user.firstName+' '+this.state.user.lastName:''}</Link>
                    <Link onClick={event => {
                        localStorage.clear();
                    }} style={{left: '50px', position: "absolute"}} className={'nav-link'}
                          to={"/login"}><FontAwesomeIcon size={"2x"} icon={faSignOutAlt}/></Link>
                </Nav>
            </>
        );
    }
}

export default HeaderView;