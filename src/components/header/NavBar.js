import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container
} from 'reactstrap';

class NavBar extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/" >Photo Album App</NavbarBrand>
                        <NavbarToggler onClick={ this.toggle } />
                        <Collapse isOpen={ this.state.isOpen } navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Link className="nav-link" to="/">
                                        Upload
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to="/search">
                                        Search
                                    </Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;