import React, {Component} from 'react';
import {Button, Card, Table} from 'react-bootstrap';
import CommonUtil from "../../CommonUtil";
import './TaskListView.css';
import './../../css/DataTable.css';
import HeaderView from "../headerview/HeaderView";
import FooterView from "../footerview/FooterView";


export interface TaskListViewProps {
}

export interface TaskListViewState {

}

class TaskListView extends Component<TaskListViewProps, TaskListViewState> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className={'home-view'}>
                <HeaderView/>
                <Card className={'data-table'}>
                    <Card.Header className={'data-table-header'} as={'h1'}>{CommonUtil.getPhrase('todoList')}</Card.Header>
                    <Card.Body className={'data-table-body'}>
                        <Table striped bordered hover variant="dark">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>{CommonUtil.getPhrase('title')}</th>
                                <th>{CommonUtil.getPhrase('description')}</th>
                                <th>{CommonUtil.getPhrase('status')}</th>
                                <th>{CommonUtil.getPhrase('action')}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>
                                    <Button variant={'success'}>{CommonUtil.getPhrase('changeStatus')}</Button>{' '}
                                    <Button variant={'info'}>{CommonUtil.getPhrase('edit')}</Button>{' '}
                                    <Button variant={'danger'}>{CommonUtil.getPhrase('delete')}</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>
                                    <Button variant={'success'}>{CommonUtil.getPhrase('changeStatus')}</Button>{' '}
                                    <Button variant={'info'}>{CommonUtil.getPhrase('edit')}</Button>{' '}
                                    <Button variant={'danger'}>{CommonUtil.getPhrase('delete')}</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td colSpan={2}>Larry the Bird</td>
                                <td>@twitter</td>
                                <td>
                                    <Button variant={'success'}>{CommonUtil.getPhrase('changeStatus')}</Button>{' '}
                                    <Button variant={'info'}>{CommonUtil.getPhrase('edit')}</Button>{' '}
                                    <Button variant={'danger'}>{CommonUtil.getPhrase('delete')}</Button>
                                </td>
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

export default TaskListView;