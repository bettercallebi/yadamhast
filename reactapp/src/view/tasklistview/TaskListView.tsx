import React, {Component} from 'react';
import {Button, Card, Table} from 'react-bootstrap';
import CommonUtil from "../../CommonUtil";
import './TaskListView.css';
import './../../css/DataTable.css';
import HeaderView from "../headerview/HeaderView";
import FooterView from "../footerview/FooterView";
import {faEdit, faPlusCircle, faTasks, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios";


export interface TaskListViewProps {
}

export interface TaskListViewState {
    taskList: any[];
    userId: number;
    user: any;
}

class TaskListView extends Component<TaskListViewProps, TaskListViewState> {
    constructor(props: any) {
        super(props);
        this.state = {
            taskList: [],
            userId: 0,
            user: {}
        } as TaskListViewState;
    }

    componentDidMount() {
        let u = localStorage.getItem('user') || '{}';
        let userModel = {
            username: JSON.parse(u).username,
            id: JSON.parse(u).id,
            userType: JSON.parse(u).userType
        }
        this.setState({
            user: userModel,
            userId: userModel.id
        });
        this.getTaskList(userModel.id);
    }

    render() {
        return (
            <div className={'home-view'}>
                <HeaderView/>
                <Card className={'data-table'}>
                    <Card.Header className={'data-table-header'} as={'h1'}>
                        <FontAwesomeIcon size={"sm"} icon={faTasks}/>{'  '}
                        {CommonUtil.getPhrase('todoList')}
                    </Card.Header>
                    <Card.Body className={'data-table-body'}>
                        <Table striped bordered hover variant="dark">
                            <thead>
                            <tr>
                                <th>{CommonUtil.getPhrase('title')}</th>
                                <th>{CommonUtil.getPhrase('description')}</th>
                                <th>{CommonUtil.getPhrase('status')}</th>
                                <th>{CommonUtil.getPhrase('action')}</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.taskList.length === 0 ?
                                    <tr>
                                        <td align={"center"} colSpan={4}>{CommonUtil.getPhrase('noTaskFind')}</td>
                                    </tr> :
                                    this.state.taskList.map((task) => (
                                        <tr id={task.id}>
                                            <td>{task.title}</td>
                                            <td>{task.description}</td>
                                            <td>{task.status}</td>
                                            <td width={100} align={"center"}>
                                                <Button
                                                    onClick={event => {

                                                    }}
                                                    variant={"outline-primary"}>
                                                    <FontAwesomeIcon size={"sm"} icon={faEdit}/>
                                                </Button>{'   '}
                                                <Button variant={"outline-danger"}
                                                        onClick={(event: any) => {
                                                            this.deleteTask(task.id)
                                                        }}>
                                                    <FontAwesomeIcon size={"sm"} icon={faTrash}/>
                                                </Button>
                                            </td>
                                        </tr>
                                    ))

                            }
                            </tbody>

                            <Button href={'/newtask'} variant="primary" type="submit">
                                <FontAwesomeIcon size={"sm"} icon={faPlusCircle}/>

                            </Button>

                        </Table>
                    </Card.Body>
                </Card>
                <FooterView/>
            </div>
        );
    }

    getTaskList(id: number) {
        axios.get("http://localhost:8080/task/list/" + id, {responseType: "json"})
            .then(response => {
                this.setState({
                    taskList: response.data
                });
            })
            .catch(reason => {
                console.log(reason)
            });
    }

    deleteTask(id: number) {
        axios.post("http://localhost:8080/task/delete", {id: id})
            .then(response => {
                this.getTaskList(this.state.user.id);
            })
            .catch(reason => {
                console.log(reason)
            });
    }

}

export default TaskListView;