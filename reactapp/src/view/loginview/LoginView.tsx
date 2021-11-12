import React, {Component} from 'react';
import {Button, ButtonGroup, Card, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import './LoginView.css';
import CommonUtil from "../../CommonUtil";

export interface LoginViewProps {
}

export interface LoginViewState {

}

class LoginView extends Component<LoginViewProps, LoginViewState> {


    render() {
        return (
            <div className={'login-view'}>
                <Card style={{borderRadius: '25px', height: '350px',backgroundColor:'#bfbfbf'}} className=" p-sm-2 text-dark">
                    <Card.Header style={{borderRadius: '25px',fontSize:'35px'}}>
                        {CommonUtil.getPhrase('app')}
                    </Card.Header>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>{CommonUtil.getPhrase('email')}</Form.Label>
                            <Form.Control type="email" placeholder={CommonUtil.getPhrase('enterEmail')}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>{CommonUtil.getPhrase('password')}</Form.Label>
                            <Form.Control type="password" placeholder={CommonUtil.getPhrase('password')}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            {CommonUtil.getPhrase('login')}
                        </Button>{'  '}
                        <Button variant="secondary" type="submit" >
                            {CommonUtil.getPhrase('dontHaveAnAccount')}
                        </Button>
                    </Form>
                </Card>
            </div>
        );
    }

}

export default LoginView;