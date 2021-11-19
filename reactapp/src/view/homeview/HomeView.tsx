import React, {Component} from 'react';
import {Navbar, Container, Card, Table, Button, Nav} from 'react-bootstrap';
import CommonUtil from "../../CommonUtil";
import './HomeView.css';
import {Link} from 'react-router-dom';
import HeaderView from "../headerview/HeaderView";
import FooterView from "../footerview/FooterView";


export interface HomeViewProps {
}

export interface HomeViewState {

}

class HomeView extends Component<HomeViewProps, HomeViewState> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className={'home-view'}>
                <HeaderView/>
                <Card className={'home-message'}>
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

export default HomeView;