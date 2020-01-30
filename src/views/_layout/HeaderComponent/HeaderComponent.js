import React, { Fragment } from 'react';
import './HeaderComponent.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import { NavLink, Redirect } from 'react-router-dom';
import { UserModel } from '../../../models/UserModel';


function HeaderComponent({ userConnected, onProfil, onSignout }) {

    return (
        <div className="container">
            { 
                userConnected.id === 0  ? <Redirect to='auth' /> 
                                        : <Fragment /> 
            }
            <Navbar bg="light" expand="lg" className="rounded border shadow" hidden={ userConnected == null || userConnected.username === '' }>
                <Navbar.Brand>
                    <Image src="images/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""></Image> Crud App
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <NavLink to="/users" className="app-menu-link pr-3" active="true">
                        <i className="fa fa-users"></i> Users
                    </NavLink>
                    <NavLink to="/datas" className="app-menu-link">
                        <i className="fa fa-square"></i> Datas
                    </NavLink>
                    <Nav className="ml-auto">
                        <NavDropdown title={ userConnected.username } id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={ onProfil }>
                                <i className="fa fa-info-circle"></i> Profil
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item 
                                onClick={ () => onSignout(new UserModel()) }>
                                <i className="fa fa-sign-out"></i> Sing out
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default HeaderComponent;