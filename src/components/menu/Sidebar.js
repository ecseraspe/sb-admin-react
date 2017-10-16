import React from 'react';

const Sidebar = () => {
  return (
    <ul className="navbar-nav navbar-sidenav">
      <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
        <a className="nav-link" href="#">
          <i className="fa fa-fw fa-dashboard"></i>&nbsp;
          <span className="nav-link-text">Dashboard</span>
        </a>
      </li>
      <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
        <a className="nav-link" href="charts.html">
          <i className="fa fa-fw fa-area-chart"></i>&nbsp;
          <span className="nav-link-text">Charts</span>
        </a>
      </li>
      <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
        <a className="nav-link" href="tables.html">
          <i className="fa fa-fw fa-table"></i>&nbsp;
          <span className="nav-link-text">Tables</span>
        </a>
      </li>
      <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
        <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseComponents" data-parent="#exampleAccordion">
          <i className="fa fa-fw fa-wrench"></i>&nbsp;
          <span className="nav-link-text">Components</span>
        </a>
        <ul className="sidenav-second-level collapse" id="collapseComponents">
          <li>
            <a href="navbar.html">Navbar</a>
          </li>
          <li>
            <a href="cards.html">Cards</a>
          </li>
        </ul>
      </li>
      <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Example Pages">
        <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseExamplePages" data-parent="#exampleAccordion">
          <i className="fa fa-fw fa-file"></i>&nbsp;
          <span className="nav-link-text">Example Pages</span>
        </a>
        <ul className="sidenav-second-level collapse" id="collapseExamplePages">
          <li>
            <a href="login.html">Login Page</a>
          </li>
          <li>
            <a href="register.html">Registration Page</a>
          </li>
          <li>
            <a href="forgot-password.html">Forgot Password Page</a>
          </li>
          <li>
            <a href="blank.html">Blank Page</a>
          </li>
        </ul>
      </li>
      <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Menu Levels">
        <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseMulti" data-parent="#exampleAccordion">
          <i className="fa fa-fw fa-sitemap"></i>&nbsp;
          <span className="nav-link-text">Menu Levels</span>
        </a>
        <ul className="sidenav-second-level collapse" id="collapseMulti">
          <li>
            <a href="#">Second Level Item</a>
          </li>
          <li>
            <a href="#">Second Level Item</a>
          </li>
          <li>
            <a href="#">Second Level Item</a>
          </li>
          <li>
            <a className="nav-link-collapse collapsed" data-toggle="collapse" href="#collapseMulti2">Third Level</a>
            <ul className="sidenav-third-level collapse" id="collapseMulti2">
              <li>
                <a href="#">Third Level Item</a>
              </li>
              <li>
                <a href="#">Third Level Item</a>
              </li>
              <li>
                <a href="#">Third Level Item</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Link">
        <a className="nav-link" href="#">
          <i className="fa fa-fw fa-link"></i>&nbsp;
          <span className="nav-link-text">Link</span>
        </a>
      </li>
    </ul>
  );
}

export default Sidebar;