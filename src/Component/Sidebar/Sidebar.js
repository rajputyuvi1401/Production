import React, { useState } from 'react';
import { Collapse, Dropdown } from 'react-bootstrap';
import { BsHouse, BsSpeedometer2, BsTable, BsBootstrap, BsGrid, BsPeople } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(''); // State to track which submenu is open
  const [sidebarOpen, setSidebarOpen] = useState(true); // State to track sidebar visibility

  // Handle menu click to toggle submenus
  const handleMenuClick = (menu) => {
    setOpenMenu(openMenu === menu ? '' : menu); // Toggle the open menu
  };

  // Toggle sidebar visibility on menu item click
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        {/* Sidebar */}
        <div className={`col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark ${sidebarOpen ? 'd-block' : 'd-none d-md-block'}`}>
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
              <span className="fs-5 d-none d-sm-inline">Menu</span>
            </a>
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
              {/* Home */}
              <li className="nav-item">
                <a href="#" className="nav-link align-middle px-0" onClick={toggleSidebar}>
                  <BsHouse size={24} /> <span className="ms-1 d-none d-sm-inline">Home</span>
                </a>
              </li>

              {/* Dashboard */}
              <li>
                <a
                  href="#submenu1"
                  onClick={() => {
                    handleMenuClick('dashboard');
                    toggleSidebar(); // Hide sidebar on menu click
                  }}
                  className="nav-link px-0 align-middle"
                >
                  <BsSpeedometer2 size={24} /> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                </a>
                <Collapse in={openMenu === 'dashboard'}>
                  <ul className="collapse nav flex-column ms-1" id="submenu1">
                    <li className="w-100">
                      <a href="#" className="nav-link px-0">
                        <span className="d-none d-sm-inline">Item 1</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link px-0">
                        <span className="d-none d-sm-inline">Item 2</span>
                      </a>
                    </li>
                  </ul>
                </Collapse>
              </li>

              {/* Orders */}
              <li>
                <a href="#" className="nav-link px-0 align-middle" onClick={toggleSidebar}>
                  <BsTable size={24} /> <span className="ms-1 d-none d-sm-inline">Orders</span>
                </a>
              </li>

              {/* Bootstrap */}
              <li>
                <a
                  href="#submenu2"
                  onClick={() => {
                    handleMenuClick('bootstrap');
                    toggleSidebar(); // Hide sidebar on menu click
                  }}
                  className="nav-link px-0 align-middle"
                >
                  <BsBootstrap size={24} /> <span className="ms-1 d-none d-sm-inline">Bootstrap</span>
                </a>
                <Collapse in={openMenu === 'bootstrap'}>
                  <ul className="collapse nav flex-column ms-1" id="submenu2">
                    <li className="w-100">
                      <a href="#" className="nav-link px-0">
                        <span className="d-none d-sm-inline">Item 1</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link px-0">
                        <span className="d-none d-sm-inline">Item 2</span>
                      </a>
                    </li>
                  </ul>
                </Collapse>
              </li>

              {/* Products */}
              <li>
                <a
                  href="#submenu3"
                  onClick={() => {
                    handleMenuClick('products');
                    toggleSidebar(); // Hide sidebar on menu click
                  }}
                  className="nav-link px-0 align-middle"
                >
                  <BsGrid size={24} /> <span className="ms-1 d-none d-sm-inline">Products</span>
                </a>
                <Collapse in={openMenu === 'products'}>
                  <ul className="collapse nav flex-column ms-1" id="submenu3">
                    <li className="w-100">
                      <a href="#" className="nav-link px-0">
                        <span className="d-none d-sm-inline">Product 1</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link px-0">
                        <span className="d-none d-sm-inline">Product 2</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link px-0">
                        <span className="d-none d-sm-inline">Product 3</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link px-0">
                        <span className="d-none d-sm-inline">Product 4</span>
                      </a>
                    </li>
                  </ul>
                </Collapse>
              </li>

              {/* Customers */}
              <li>
                <a href="#" className="nav-link px-0 align-middle" onClick={toggleSidebar}>
                  <BsPeople size={24} /> <span className="ms-1 d-none d-sm-inline">Customers</span>
                </a>
              </li>
            </ul>
            <hr />

            {/* User Dropdown */}
            <Dropdown className="pb-4">
              <Dropdown.Toggle
                variant="link"
                id="dropdownUser1"
                className="d-flex align-items-center text-white text-decoration-none"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="user"
                  width="30"
                  height="30"
                  className="rounded-circle"
                />
                <span className="d-none d-sm-inline mx-1">loser</span>
              </Dropdown.Toggle>
  
              <Dropdown.Menu className="dropdown-menu-dark text-small shadow">
                <Dropdown.Item href="#">New project...</Dropdown.Item>
                <Dropdown.Item href="#">Settings</Dropdown.Item>
                <Dropdown.Item href="#">Profile</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Sign out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        {/* Main Content */}
        <div className="col py-3">
          <h3>Left Sidebar with Submenus</h3>
          <p className="lead">
            An example 2-level sidebar with collapsible menu items. The menu functions like an "accordion" where only a single
            menu is open at a time. While the sidebar itself is not toggle-able, it does responsively shrink in width on smaller screens.
          </p>
          <ul className="list-unstyled">
            <li><h5>Responsive</h5> shrinks in width, hides text labels, and collapses to icons only on mobile.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
