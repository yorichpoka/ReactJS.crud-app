import React, { Component } from 'react';
import './HeaderComponent.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
// import { UserModel } from '../../../models/UserModel';
import { Redirect } from 'react-router-dom';


class HeaderComponent extends Component {

    state = {
        isRedirected: false
    }

    render() {
        // Rediction à la route
        if (this.state.isRedirected)
            return <Redirect path={ '/auth' }></Redirect>

        return (
            <div className="container">
                <Navbar bg="light" expand="lg" className="rounded border shadow" hidden={ this.props.user == null || this.props.user.username === '' }>
                    <Navbar.Brand href="#users">
                        <Image src="images/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""></Image> Crud App
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav.Link href="#auth" active="true">
                            <i className="fa fa-users"></i> Users
                        </Nav.Link>
                        <Nav.Link href="#datas">
                            <i className="fa fa-square"></i> Datas
                        </Nav.Link>
                        <Nav className="ml-auto">
                            <NavDropdown title={ this.props.user.username } id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={ this.props.onProfil }>
                                    <i className="fa fa-info-circle"></i> Profil
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={ () => this.setState({ isRedirected: true }) }>
                                    <i className="fa fa-sign-out"></i> Sing out
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default HeaderComponent;