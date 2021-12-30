import React, {Component} from 'react';
import {Button, Card, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import './TaskEditView.css';
import CommonUtil from "../../CommonUtil";
import FooterView from "../footerview/FooterView";
import HeaderView from "../headerview/HeaderView";
import axios from "axios";
import {DatePicker} from 'jalali-react-datepicker';
import {faPaintBrush} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export enum TaskStatus {
    'SCHEDULED',
    'DONE',
    'POSTPONED',
}

export interface TaskEditViewProps {
}

export interface TaskEditViewState {
    title: string;
    description: string;
    hasAlarm: boolean;
    dateTime: Date;
    alarmDateTime: Date;
    user: any;
    taskType: number;
    date: string;
}

class TaskEditView extends Component<TaskEditViewProps, TaskEditViewState> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: '',
            description: '',
            hasAlarm: false,
            dateTime: new Date(),
            alarmDateTime: new Date(),
            user: {},
            taskType: 1,
            date: ''
        } as TaskEditViewState;
        this.saveTask = this.saveTask.bind(this)
    }

    render() {
        return (
            <div>
                <HeaderView/>
                <div className={'task-edit-view'}>
                    <Form onSubmit={this.saveTask} id={'TaskNewFormId'}>
                        <Card style={{borderRadius: '25px', backgroundColor: '#bfbfbf'}} className=" p-sm-2 text-dark">
                            <Card.Header style={{borderRadius: '25px', fontSize: '35px'}}>
                                <FontAwesomeIcon size={"1x"} icon={faPaintBrush}/> {CommonUtil.getPhrase('taskEdit')}
                            </Card.Header>
                            <Card.Body>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>
                                        {CommonUtil.getPhrase('title')}
                                    </Form.Label>
                                    <Form.Control
                                        name={'title'}
                                        value={this.state.title}
                                        onChange={(event) => {
                                            this.setState({title: event.target.value})
                                        }}
                                        type="text"
                                        placeholder={CommonUtil.getPhrase('enterTitle')}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>
                                        {CommonUtil.getPhrase('description')}
                                    </Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name={'description'}
                                        value={this.state.description}
                                        onChange={(event) => {
                                            this.setState({description: event.target.value})
                                        }}
                                        type="text"
                                        placeholder={CommonUtil.getPhrase('enterDescription')}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Check
                                        name={'hasAlarm'}
                                        onChange={(event) => {
                                            this.setState({hasAlarm: event.target.checked})
                                        }}
                                        type="checkbox"
                                        label={CommonUtil.getPhrase('hasAlarm')}/>
                                </Form.Group>
                                {this.state.hasAlarm ?
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>
                                            {CommonUtil.getPhrase('alarmDateTime')}
                                        </Form.Label>
                                        <DatePicker
                                            className={'datepicker'}
                                            isRenderingButtons={true}
                                            onClickSubmitButton={arg => {
                                                this.setState({alarmDateTime: arg.value});
                                                console.log(this.state.alarmDateTime)
                                            }}/>
                                    </Form.Group>
                                    : <div></div>
                                }

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>
                                        {CommonUtil.getPhrase('taskDate')}
                                    </Form.Label>
                                    <DatePicker
                                        className={'datepicker'}
                                        isRenderingButtons={true}
                                        onClickSubmitButton={arg => {
                                            this.setState({dateTime: arg.value});
                                            console.log(this.state.dateTime)
                                        }}/>
                                </Form.Group>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="primary" type="submit">
                                    {CommonUtil.getPhrase('add')}
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Form>
                </div>
                <FooterView/>
            </div>
        );
    }

    saveTask(event: any) {
        // this code prevent react from refreshing the page after submit
        event.preventDefault();
        axios.post('http://localhost:8080/task/save', this.state)
            .then(response => {
                if (response.data > 0) {
                    window.location.replace("http://localhost:3000/tasks");
                } else {
                    alert("OOPS, Error in Task Service!");
                }
            }).catch(error => {
            console.log(error);
        });
    }

}

export default TaskEditView;