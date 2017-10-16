import React from 'react';

import Sidebar from './menu/Sidebar';
import HeadMenu from './menu/HeadMenu';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
      <a className="navbar-brand" href="#">Start Bootstrap</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse">
        <Sidebar />
        <ul className="navbar-nav sidenav-toggler">
          <li className="nav-item">
            <a className="nav-link text-center" id="sidenavToggler">
              <i className="fa fa-fw fa-angle-left"></i>
            </a>
          </li>
        </ul>
        <HeadMenu />
      </div>
    </nav>
  )
}

export default Header;