import React from 'react';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

const Header = () => {
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand tag={RouterNavLink} to="/">Quote</NavbarBrand>
            <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink tag={RouterNavLink} to="/add">add quote</NavLink>
                    </NavItem>


                </Nav>


        </Navbar>
    );
};

export default Header;