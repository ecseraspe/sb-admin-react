import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

import ComponentMenu from './SideMenu/ComponentMenu';
import ExamplePageMenu from './SideMenu/ExamplePageMenu';
import NestedMenu from './SideMenu/NestedMenu';

class Sidebar extends Component {

  render() {
    return (
      <Nav vertical navbar className="navbar-sidenav">
        <NavItem>
          <NavLink tag={Link} to="/">
              <i className="fa fa-fw fa-dashboard"></i>&nbsp;
              <span className="nav-link-text">Dashboard</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/charts">
            <i className="fa fa-fw fa-area-chart"></i>&nbsp;
            <span className="nav-link-text">Charts</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <i className="fa fa-fw fa-table"></i>&nbsp;
            <span className="nav-link-text">Tables</span>
          </NavLink>
        </NavItem>
        <ComponentMenu />
        <ExamplePageMenu />
        <NestedMenu />
        <NavItem>
          <NavLink href="#">
            <i className="fa fa-fw fa-link"></i>&nbsp;
            <span className="nav-link-text">Link</span>
          </NavLink>
        </NavItem>
      </Nav>
    );
  }
}

export default Sidebar;