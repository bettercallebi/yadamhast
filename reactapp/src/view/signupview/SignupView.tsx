import React, {Component} from 'react';
import {Button, ButtonGroup, Card, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import './SignupView.css';
import CommonUtil from "../../CommonUtil";
import FooterView from "../footerview/FooterView";
import HeaderView from "../headerview/HeaderView";

export interface SignupViewProps {
}

export interface SignupViewState {

}

class SignupView extends Component<SignupViewProps, SignupViewState> {


    render() {
        return (
            <div>
                <HeaderView/>
                <div className={'signup-view'}>
                    <Card style={{borderRadius: '25px', backgroundColor: '#bfbfbf'}} className=" p-sm-2 text-dark">
                        <Card.Header style={{borderRadius: '25px', fontSize: '35px'}}>
                            {CommonUtil.getPhrase('app')}
                        </Card.Header>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>{CommonUtil.getPhrase('firstName')}</Form.Label>
                                <Form.Control type="text" placeholder={CommonUtil.getPhrase('enterFirstName')}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>{CommonUtil.getPhrase('lastName')}</Form.Label>
                                <Form.Control type="text" placeholder={CommonUtil.getPhrase('enterLastname')}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>{CommonUtil.getPhrase('username')}</Form.Label>
                                <Form.Control type="text" placeholder={CommonUtil.getPhrase('enterUsername')}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>{CommonUtil.getPhrase('email')}</Form.Label>
                                <Form.Control type="email" placeholder={CommonUtil.getPhrase('enterEmail')}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>{CommonUtil.getPhrase('password')}</Form.Label>
                                <Form.Control type="password" placeholder={CommonUtil.getPhrase('enterPassword')}/>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                {CommonUtil.getPhrase('signup')}
                            </Button>{'  '}
                            <Button href={'/login'} variant="secondary" type="submit">
                                {CommonUtil.getPhrase('haveAnAccount')}
                            </Button>
                        </Form>
                    </Card>
                </div>
                <FooterView/>
            </div>
        );
    }

}

export default SignupView;