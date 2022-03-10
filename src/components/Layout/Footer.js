import React, { Component, Fragment } from 'react';
import { Nav, Navbar, NavItem } from 'reactstrap';

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Navbar>
          <Nav navbar>
            <NavItem>
              2021 Arena Web Security
            </NavItem>
          </Nav>
        </Navbar>
      </Fragment>
    );
  }
}

export default Footer;