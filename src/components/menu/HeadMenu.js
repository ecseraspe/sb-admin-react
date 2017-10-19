import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';

import MessageNotification from './Header/MessageNotification';
import AlertNotification from './Header/AlertNotification';
import SearchForm from './Header/SearchForm';

class HeadMenu extends Component {
  
  render() {
    return (
      <Nav navbar className="ml-auto">
        <MessageNotification />
        <AlertNotification />
        <SearchForm />
        <NavItem>
          <a className="nav-link" data-toggle="modal" data-target="#exampleModal">
             <i className="fa fa-fw fa-sign-out"></i>&nbsp;Logout
          </a>
        </NavItem>
      </Nav>
    );
  }
}

export default HeadMenu;