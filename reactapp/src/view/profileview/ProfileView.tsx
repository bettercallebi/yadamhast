import React, {Component} from 'react';
import {Button, Card, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import './ProfileView.css';
import CommonUtil from "../../CommonUtil";
import HeaderView from "../headerview/HeaderView";
import FooterView from "../footerview/FooterView";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faIdCard} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export interface ProfileViewProps {
}

export interface ProfileViewState {
    user: any;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    userType: number;
    id: number;
}

class ProfileView extends Component<ProfileViewProps, ProfileViewState> {
    constructor(props: any) {
        super(props);
        this.state = {
            user: {},
            id: 0,
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            userType: 1
        } as ProfileViewState;
        this.editUser = this.editUser.bind(this)
    }

    componentDidMount() {
        let u = localStorage.getItem('user') || '{}';
        let userModel = {
            username: JSON.parse(u).username,
            id: JSON.parse(u).id,
            userType: JSON.parse(u).userType
        }
        this.setState({
            user: userModel,
        });
        this.loadUser(userModel.id);
    }

    render() {
        return (
            <div>
                <HeaderView/>
                <div className={'profile-view'}>
                    <Form onSubmit={this.editUser} id={'profileFormId'}>
                        <Card style={{borderRadius: '25px', backgroundColor: '#bfbfbf'}} className=" p-sm-2 text-dark">
                            <Card.Header style={{borderRadius: '25px', fontSize: '35px'}}>
                                <FontAwesomeIcon icon={["fas", "user"]}/><FontAwesomeIcon size={"1x"}
                                                                                          icon={faIdCard}/>{' '} {CommonUtil.getPhrase('profile')}
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
                                    {CommonUtil.getPhrase('edit')}
                                </Button>{'  '}
                            </Card.Footer>
                        </Card>
                    </Form>
                </div>
                <FooterView/>
            </div>
        );
    }

    loadUser(id: number) {
        axios.get("http://localhost:8080/user/" + id, {responseType: "json"})
            .then(response => {
                this.setState({
                    user: response.data,
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    username: response.data.username,
                    email: response.data.email,
                    password: response.data.password,
                    userType: response.data.userType,
                    id: response.data.id
                });
            })
            .catch(reason => {
                console.log(reason)
            });
    }

    editUser(event: any) {
        event.preventDefault();
        axios.post("http://localhost:8080/user/edit", this.state)
            .then(response => {
                if (response.data < 1) {
                    alert(CommonUtil.getPhrase('usernameExist'))
                }
            })
            .catch(reason => {
                console.log(reason)
            });
    }

}

export default ProfileView;