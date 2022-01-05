import React, {Component} from 'react';
import {Button, Card, Table} from 'react-bootstrap';
import CommonUtil from "../../CommonUtil";
import './TaskListView.css';
import './../../css/DataTable.css';
import HeaderView from "../headerview/HeaderView";
import FooterView from "../footerview/FooterView";
import {
    faBell,
    faBellSlash,
    faCalendarAlt,
    faCalendarPlus,
    faCheckCircle,
    faEdit,
    faPlusCircle,
    faTasks,
    faTimes,
    faTrash
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios";
import {Link} from "react-router-dom";


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
                                <th align={"center"}>{CommonUtil.getPhrase('alarm')}</th>
                                <th align={"center"}>{CommonUtil.getPhrase('status')}</th>
                                <th align={"center"}>{CommonUtil.getPhrase('action')}</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.taskList.length === 0 ?
                                    <tr>
                                        <td align={"center"} colSpan={5}>{CommonUtil.getPhrase('noTaskFind')}</td>
                                    </tr> :
                                    this.state.taskList.map((task) => (
                                        <tr id={task.id}>
                                            <td>{task.title}</td>
                                            <td>{task.description}</td>
                                            <td width={50} align={"center"}>
                                                {this.getTaskAlarmStatus(task)}
                                            </td>
                                            <td width={50} align={"center"}>
                                                {this.getTaskStatus(task.taskStatus)}
                                            </td>
                                            <td width={150} align={"center"}>
                                                <Button
                                                    href={'taskedit/' + task.id}
                                                    variant={"outline-primary"}>
                                                    <Link to={'taskedit/' + task.id}/>
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

    getTaskStatus(status: any): React.ReactNode {
        if (status === 0 || status === 'SCHEDULED') {
            return <FontAwesomeIcon color={'#03d1f8'} size={"2x"} icon={faCalendarAlt}/>;
        } else if (status == 1 || status === 'DONE') {
            return <FontAwesomeIcon color={'#2bff00'} size={"2x"} icon={faCheckCircle}/>;
        } else if (status == 2 || status === 'POSTPONED') {
            return <FontAwesomeIcon color={'#f5f512'} size={"2x"} icon={faCalendarPlus}/>;
        } else return <FontAwesomeIcon icon={faTimes}/>;
    }

    getTaskAlarmStatus(task: any): React.ReactNode {
        console.log(task.alarmDateTime)
        console.log(new Date())
        if (task.hasAlarm) {
            // if (new Date()==task.alarmDateTime)
            return <FontAwesomeIcon color={'#03d1f8'} size={"2x"} icon={faBell}/>;
        } else if (!task.hasAlarm) {
            return <FontAwesomeIcon color={'#b02f2f'} size={"2x"} icon={faBellSlash}/>;
        } else return <FontAwesomeIcon icon={faTimes}/>;
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