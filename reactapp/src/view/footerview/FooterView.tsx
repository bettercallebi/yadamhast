import React, {Component} from 'react';
import {Navbar, Container, Card, Table, Button, Nav} from 'react-bootstrap';
import CommonUtil from "../../CommonUtil";
import './FooterView.css';
import {Link} from 'react-router-dom';


export interface FooterViewProps {
}

export interface FooterViewState {

}

class FooterView extends Component<FooterViewProps, FooterViewState> {
    constructor(props: any) {
        super(props);
    }

    render() {
        let year=new Date().getFullYear();
        return (
            <div className={'footer-view'}>
                <Card style={{backgroundColor:'#bfbfbf'}}>
                    <Card.Body style={{backgroundColor:'#b9b9b9'}}>
                        {CommonUtil.getPhrase('copyRight')}
                        {year}{'-'}{year+1}
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default FooterView;