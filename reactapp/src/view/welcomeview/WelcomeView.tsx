import React, {Component} from 'react';
import {Navbar, Container, Card, Table, Button, Nav} from 'react-bootstrap';
import CommonUtil from "../../CommonUtil";
import {Link} from 'react-router-dom';
import HeaderView from "../headerview/HeaderView";
import FooterView from "../footerview/FooterView";


export interface WelcomeViewProps {
}

export interface WelcomeViewState {

}

class WelcomeView extends Component<WelcomeViewProps, WelcomeViewState> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className={'home-view'}>
                <HeaderView/>
                <Card>
                    <Card.Body>
                        <blockquote className={'blockquote mb-0'}>
                            <p>
                                {CommonUtil.getPhrase('welcomeMessage')}
                            </p>
                            <footer className={'blockquote-footer'}>
                                {CommonUtil.getPhrase('aboutAppMessage')}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
                <FooterView/>
            </div>
        );
    }
}

export default WelcomeView;