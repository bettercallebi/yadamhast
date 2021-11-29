import React, {Component} from 'react';
import {Button, Card, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import './ProfileView.css';
import CommonUtil from "../../CommonUtil";
import HeaderView from "../headerview/HeaderView";
import FooterView from "../footerview/FooterView";

export interface ProfileViewProps {
}

export interface ProfileViewState {

}

class ProfileView extends Component<ProfileViewProps, ProfileViewState> {


    render() {
        return (
            <div>
                <HeaderView/>
                <div className={'profile-view'}>
                    <Card style={{borderRadius: '25px', backgroundColor: '#bfbfbf'}} className=" p-sm-2 text-dark">
                        <Card.Header style={{borderRadius: '25px', fontSize: '35px'}}>
                            {CommonUtil.getPhrase('profile')}
                        </Card.Header>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>{CommonUtil.getPhrase('firstName')}</Form.Label>
                                <Form.Control value={"Ebi"} type="text" placeholder={CommonUtil.getPhrase('enterFirstName')}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>{CommonUtil.getPhrase('lastName')}</Form.Label>
                                <Form.Control value={"Abbaszadeh"} type="text" placeholder={CommonUtil.getPhrase('enterLastname')}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>{CommonUtil.getPhrase('username')}</Form.Label>
                                <Form.Control value={"bettercallebi"} type="text" placeholder={CommonUtil.getPhrase('enterUsername')}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>{CommonUtil.getPhrase('email')}</Form.Label>
                                <Form.Control value={"ebi@yadamhast.com"} type="email" placeholder={CommonUtil.getPhrase('enterEmail')}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>{CommonUtil.getPhrase('password')}</Form.Label>
                                <Form.Control value={"123"} type="password" placeholder={CommonUtil.getPhrase('enterPassword')}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>{CommonUtil.getPhrase('avatar')}</Form.Label>
                                <Form.Control type="file" placeholder={CommonUtil.getPhrase('enterPassword')}/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                {CommonUtil.getPhrase('edit')}
                            </Button>{'  '}
                            <Button href={'/login'} variant="secondary" type="submit">
                                {CommonUtil.getPhrase('changePassword')}
                            </Button>
                        </Form>
                    </Card>
                </div>
                <FooterView/>
            </div>
        );
    }

}

export default ProfileView;