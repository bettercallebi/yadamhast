import React, {Component} from 'react';
import {Button, Card, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import './LoginView.css';
import CommonUtil from "../../CommonUtil";
import HeaderView from "../headerview/HeaderView";
import FooterView from "../footerview/FooterView";
import axios from "axios";
import {faUserCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export interface LoginViewProps {
}

export interface LoginViewState {
    username: string;
    password: string;
    user: string;
}

class LoginView extends Component<LoginViewProps, LoginViewState> {
    constructor(props: any) {
        super(props);
        this.state = {
            username: '',
            password: '',
            user: ''
        }
        this.login = this.login.bind(this)
    }

    render() {
        return (
            <div>
                <HeaderView/>
                <div className={'login-view'}>
                    <Card style={{borderRadius: '25px', height: '350px', backgroundColor: '#bfbfbf'}}
                          className=" p-sm-2 text-dark">
                        <Card.Header style={{borderRadius: '25px', fontSize: '35px'}}>
                            <FontAwesomeIcon size={"1x"} icon={faUserCheck}/>{CommonUtil.getPhrase('login')}
                        </Card.Header>
                        <Form onSubmit={this.login}>
                            <Form.Group className="mb-3" controlId="username">
                                <Form.Label>{CommonUtil.getPhrase('username')}</Form.Label>
                                <Form.Control
                                    name={'username'}
                                    value={this.state.username}
                                    onChange={(event) => {
                                        this.setState({username: event.target.value})
                                    }}
                                    type="text"
                                    placeholder={CommonUtil.getPhrase('enterUsername')}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>{CommonUtil.getPhrase('password')}</Form.Label>
                                <Form.Control
                                    name={'password'}
                                    value={this.state.password}
                                    onChange={(event) => {
                                        this.setState({password: event.target.value})
                                    }}
                                    type="password"
                                    placeholder={CommonUtil.getPhrase('password')}
                                />
                            </Form.Group>
                            <Button onClick={this.login} variant="primary" type="submit">
                                {CommonUtil.getPhrase('login')}
                            </Button>{'  '}
                            <Button href={'/signup'} variant="secondary" type="submit">
                                {CommonUtil.getPhrase('dontHaveAnAccount')}
                            </Button>
                        </Form>
                    </Card>
                </div>
                <FooterView/>
            </div>
        );
    }

    login(event: any) {
        event.preventDefault();
        axios.post('http://localhost:8080/user/login', this.state)
            .then(response => {
                if (response.data) {
                    this.setState({user: response.data});
                    CommonUtil.currentUser = response.data;
                    localStorage.setItem('user', JSON.stringify(this.state.user));
                    alert(CommonUtil.getPhrase('user') + ' ' + response.data.username + ' ' + CommonUtil.getPhrase('loggedIn'));
                    window.location.replace('http://localhost:3000/home');
                } else {
                    alert(CommonUtil.getPhrase('userNotFound'));
                }
            }).catch(reason => {
            console.log(reason)
            alert(CommonUtil.getPhrase('serverError'));
        });
    }

}

export default LoginView;