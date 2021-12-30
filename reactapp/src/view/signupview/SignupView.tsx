import React, {Component} from 'react';
import {Button, Card, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import './SignupView.css';
import CommonUtil from "../../CommonUtil";
import FooterView from "../footerview/FooterView";
import HeaderView from "../headerview/HeaderView";
import axios from "axios";
import {faUserPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export interface SignupViewProps {
}

export interface SignupViewState {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    userType: number,
    taskList: any[]
}

class SignupView extends Component<SignupViewProps, SignupViewState> {
    constructor(props: any) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            userType: 1,
            taskList: []
        } as SignupViewState;
        this.saveUser = this.saveUser.bind(this)
    }

    render() {
        return (
            <div>
                <HeaderView/>
                <div className={'signup-view'}>
                    <Form onSubmit={this.saveUser} id={'signupFormId'}>
                        <Card style={{borderRadius: '25px', backgroundColor: '#bfbfbf'}} className=" p-sm-2 text-dark">
                            <Card.Header style={{borderRadius: '25px', fontSize: '35px'}}>
                                     <FontAwesomeIcon size={"1x"} icon={faUserPlus}/> {CommonUtil.getPhrase('signup')}
                            </Card.Header>
                            <Card.Body>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>
                                        {CommonUtil.getPhrase('firstName')}
                                    </Form.Label>
                                    <Form.Control
                                        name={'firstName'}
                                        value={this.state.firstName}
                                        onChange={(event) => {
                                            this.setState({firstName: event.target.value})
                                        }}
                                        type="text"
                                        placeholder={CommonUtil.getPhrase('enterFirstName')}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>
                                        {CommonUtil.getPhrase('lastName')}
                                    </Form.Label>
                                    <Form.Control
                                        name={'lastName'}
                                        value={this.state.lastName}
                                        onChange={(event) => {
                                            this.setState({lastName: event.target.value})
                                        }}
                                        type="text"
                                        placeholder={CommonUtil.getPhrase('enterLastname')}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>
                                        {CommonUtil.getPhrase('username')}
                                    </Form.Label>
                                    <Form.Control
                                        name={'username'}
                                        value={this.state.username}
                                        onChange={(event) => {
                                            this.setState({username: event.target.value})
                                        }}
                                        type="text"
                                        placeholder={CommonUtil.getPhrase('enterUsername')}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>
                                        {CommonUtil.getPhrase('email')}
                                    </Form.Label>
                                    <Form.Control
                                        name={'email'}
                                        value={this.state.email}
                                        onChange={(event) => {
                                            this.setState({email: event.target.value})
                                        }}
                                        type="email"
                                        placeholder={CommonUtil.getPhrase('enterEmail')}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>
                                        {CommonUtil.getPhrase('password')}
                                    </Form.Label>
                                    <Form.Control
                                        name={'password'}
                                        value={this.state.password}
                                        onChange={(event) => {
                                            this.setState({password: event.target.value})
                                        }}
                                        type="password"
                                        placeholder={CommonUtil.getPhrase('enterPassword')}/>
                                </Form.Group>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="primary" type="submit">
                                    {CommonUtil.getPhrase('signup')}
                                </Button>{'  '}
                                <Button href={'/login'} variant="secondary" type="submit">
                                    {CommonUtil.getPhrase('haveAnAccount')}
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Form>
                </div>
                <FooterView/>
            </div>
        );
    }

    saveUser(event: any) {
        // this code prevent react from refreshing the page after submit
        event.preventDefault();
        axios.post('http://localhost:8080/user/save', this.state)
            .then(response => {
                if (response.data > 0) {
                    window.location.replace("http://localhost:3000/login");
                } else {
                    alert("OOPS, Error in signup!");
                }
            }).catch(error => {
            console.log(error);
        });
    }

}

export default SignupView;