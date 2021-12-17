import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import CommonUtil from "../../CommonUtil";
import './FooterView.css';
import {faCopyright} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export interface FooterViewProps {
}

export interface FooterViewState {

}

class FooterView extends Component<FooterViewProps, FooterViewState> {
    constructor(props: any) {
        super(props);
    }

    render() {
        let year = new Date().getFullYear();
        return (
            <div className={'footer-view'}>
                <Card style={{backgroundColor: '#bfbfbf'}}>
                    <Card.Body style={{backgroundColor: '#b9b9b9'}}>
                        {CommonUtil.getPhrase('copyRight')}
                        <FontAwesomeIcon size={"sm"} icon={faCopyright}/>{' '}
                        {year}{'-'}{year + 1}
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default FooterView;