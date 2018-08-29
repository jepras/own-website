import React from 'react'
import styles from "../pages/index.module.css"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

export default class Header extends React.Component {
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

 /*  const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
        {props.children}
    </Link>
  </li>
  ) */

/* const Header = ({ siteTitle }) => ( */
/*   <div style={{ margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem` }}> 
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>MySweetSite</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
      
    </header>
  </div> */
  render() {
    return(
  
      <div>
        <Navbar color="white" light expand="md">
        <NavbarBrand href="/">JepRas</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className={styles.centerparent}>
                <NavLink href="#">About</NavLink>
              </NavItem>
              <NavItem className={styles.centerparent}>
                <NavLink href="#">Projects</NavLink>
              </NavItem>
              <NavItem className={styles.centerparent}>
                <NavLink href="#">Contact</NavLink>
              </NavItem>
            </Nav>
        </Collapse>
        </Navbar>
      </div> 
    )
  }
}