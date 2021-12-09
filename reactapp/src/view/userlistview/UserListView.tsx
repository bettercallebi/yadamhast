import React, {Component} from 'react';
import {Button, Card, Table} from 'react-bootstrap';
import CommonUtil from "../../CommonUtil";
import './UserListView.css';
import './../../css/DataTable.css';
import HeaderView from "../headerview/HeaderView";
import FooterView from "../footerview/FooterView";
import {faContactCard, faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios";


export interface UserListViewProps {
}

export interface UserListViewState {
    userList: any[]
}

class UserListView extends Component<UserListViewProps, UserListViewState> {
    constructor(props: any) {
        super(props);
        this.state = {
            userList: []
        } as UserListViewState;
    }

    componentDidMount() {
        this.getUserList();
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
                                <th>{CommonUtil.getPhrase('firstName')}</th>
                                <th>{CommonUtil.getPhrase('lastName')}</th>
                                <th>{CommonUtil.getPhrase('username')}</th>
                                <th>{CommonUtil.getPhrase('email')}</th>
                                <th align={"center"}>{CommonUtil.getPhrase('action')}</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.userList.length === 0 ?
                                    <tr>
                                        <td align={"center"} colSpan={5}>{CommonUtil.getPhrase('noUserFound')}</td>
                                    </tr> :
                                    this.state.userList.map((user) => (
                                        <tr id={user.id}>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td width={100} align={"center"}>
                                                <Button variant={"outline-primary"}>
                                                    <FontAwesomeIcon size={"sm"} icon={faEdit}/>
                                                </Button>{'   '}
                                                <Button onClick={(event: any) => {
                                                    this.deleteUser(user.id)
                                                }} variant={"outline-danger"}>
                                                    <FontAwesomeIcon size={"sm"} icon={faTrash}/>
                                                </Button>
                                            </td>
                                        </tr>
                                    ))
                            }
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
                <FooterView/>
            </div>
        );
    }

    getUserList() {
        axios.get('http://localhost:8080/user/list')
            .then(response => {
                this.setState({userList: response.data});
            }).catch(error => {
            console.log(error);
        });
    }

    deleteUser(id: number) {
        axios.post('http://localhost:8080/user/delete', {id: id})
            .then(response => {
                alert('Deleted!');
                this.getUserList();
            }).catch(error => {
            console.log(error);
        });
    }
}

export default UserListView;