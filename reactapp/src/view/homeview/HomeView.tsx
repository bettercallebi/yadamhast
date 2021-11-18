import React, { Component } from 'react';
import { Navbar, Container, Card, Table, Button, Nav } from 'react-bootstrap';
import CommonUtil from "../../CommonUtil";
import './HomeView.css';


export interface HomeViewProps {
}

export interface HomeViewState {

}

class HomeView extends Component<HomeViewProps, HomeViewState> {

    render() {
        return (
            <div className={'home-view'}>
                <Navbar bg="dark" variant="dark">
                    <Container className={'nav-container'}>
                        <Navbar.Brand href="#home">
                           {' '}
                            {CommonUtil.getPhrase('app')}
                        </Navbar.Brand>
                        <Nav className={'nav'}>
                            <Nav.Link href="#home">{CommonUtil.getPhrase('home')}</Nav.Link>
                            <Nav.Link href="#features">{CommonUtil.getPhrase('profile')}</Nav.Link>
                            <Nav.Link href="#pricing">{CommonUtil.getPhrase('logout')}</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <Card className={'data-table'}>
                    <Card.Header as={'h1'}>{CommonUtil.getPhrase('todoList')}</Card.Header>
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
                            <td colSpan={2} >Larry the Bird</td>
                            <td>@twitter</td>
                            <td>
                                <Button variant={'success'}>{CommonUtil.getPhrase('changeStatus')}</Button>{' '}
                                <Button variant={'info'}>{CommonUtil.getPhrase('edit')}</Button>{' '}
                                <Button variant={'danger'}>{CommonUtil.getPhrase('delete')}</Button>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </Card>
            </div>
        );
    }
}

export default HomeView;