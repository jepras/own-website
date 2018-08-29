import React from 'react'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

export default class ReactNavbar extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
        isOpen: false
        };
    }

    toggle() {
        this.setState({
        isOpen: !this.state.isOpen
        });
    }
    
    render() {
        return (
        <div>
            <Navbar color="light" light expand="md">
            <NavbarBrand href="/">DataManager</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>

                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                    Profile
                    </DropdownToggle>
                    <DropdownMenu right>
                    <DropdownItem>
                        Settings
                    </DropdownItem>
                    <DropdownItem>
                        Delete
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                        Logout
                    </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>

                <NavItem>
                    <p>hej</p>
                </NavItem>


                </Nav>
            </Collapse>
            </Navbar>
        </div>
        );
    }
}
