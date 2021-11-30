import React, {Component} from 'react';
import {Card, Table} from 'react-bootstrap';
import CommonUtil from "../../CommonUtil";
import './UserListView.css';
import './../../css/DataTable.css';
import HeaderView from "../headerview/HeaderView";
import FooterView from "../footerview/FooterView";
import {faContactCard} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export interface UserListViewProps {
}

export interface UserListViewState {

}

class UserListView extends Component<UserListViewProps, UserListViewState> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className={'user-list-view'}>
                <HeaderView/>
                <Card className={'data-table'}>
                    <Card.Header className={'data-table-header'} as={'h1'}>
                        <FontAwesomeIcon size={"1x"} icon={faContactCard}/>{CommonUtil.getPhrase('userList')}
                    </Card.Header>
                    <Card.Body className={'data-table-body'}>
                        <Table striped bordered hover variant="dark">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>{CommonUtil.getPhrase('fullName')}</th>
                                <th>{CommonUtil.getPhrase('username')}</th>
                                <th>{CommonUtil.getPhrase('password')}</th>
                                <th>{CommonUtil.getPhrase('email')}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Ebi</td>
                                <td>Abbaszadeh</td>
                                <td>123</td>
                                <td>@bettercallebi</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>dds</td>
                                <td>@fat</td>
                                <td>e@mail.com</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
                <FooterView/>
            </div>
        );
    }
}

export default UserListView;