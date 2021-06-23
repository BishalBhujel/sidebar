import React, { useState } from "react";
import { NavLink as NavLinkRRD } from 'next/router'
import styles from "../styles/Sidebar.module.css";
import routes from './routes.js';
import Link from 'next/link';
//import { NavLink as NavLinkRRD, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

import { useRouter } from "next/router";

var ps;

const Sidebar = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  }

  const displaySidebar = () => {
    setSidebar(!sidebar);
  }

  const router = useRouter();
  const [collapseOpen, setCollapseOpen] = useState();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  // toggles collapse between opened and closed (true/false)
  const toggleCollapse = () => {
    setCollapseOpen((data) => !data);
  };


  // closes the collapse
  const closeCollapse = () => {
    setCollapseOpen(false);
  };
  // creates the links that appear in the left menu / Sidebar
  
  const createLinks = (routes) => {
    return routes.map((prop, key) => {
      if (router.asPath === prop.path) {
        return (
          <NavItem key={key} >
            <NavLink
              to={prop.path}
              tag={NavLinkRRD}
              onClick={closeCollapse}
              activeClassName={styles.active}
            >
              <Link href={`${prop.path}`}>
                <div className={styles.option1}>
                  <a className={styles.ops1}>
                    <i className={prop.icon} />
                    {prop.name}
                  </a>
                </div>
              </Link>
            </NavLink>
          </NavItem>
        );
      }
      else {
        return (
          <NavItem key={key} >
            <NavLink
              to={prop.path}
              tag={NavLinkRRD}
              onClick={closeCollapse}
              activeClassName={styles.active}
            >
              <Link href={`${prop.path}`}>
                <div className={styles.option}>
                  <a className={styles.ops}>
                    <i className={prop.icon} />
                    {prop.name}
                  </a>
                </div>
              </Link>
            </NavLink>
          </NavItem>
        )
      }
      });
    };


   let navbarBrandProps;
/*  const { bgColor, routes, logo } = props;
 
  if (logo && logo.innerLink) {
    navbarBrandProps = {
      to: logo.innerLink,
      tag: Link,
    };
  } else if (logo && logo.outterLink) {
    navbarBrandProps = {
      href: logo.outterLink,
      target: "_blank",
    };
  }*/


  return (
    <Navbar
      className="navbar-vertical fixed-left navbar-light bg-white"
      expand="md"
      id="sidenav-main"
    >
      <Container fluid>
        {/* Toggler */}
        <button
          className={styles.navbartoggler}
          type="button"
          onClick={toggleCollapse}
        >
          <span className="navbar-toggler-icon" />
        </button>
      
      
        {/*} <NavbarBrand className="pt-0" >
            <img
              alt="..."
              className="navbar-brand-img"
              src="/logowhite.png"
            />
          </NavbarBrand>
  */}
        
        <DropdownToggle nav>
          <Media className={styles.bellicon}>
              <img
                alt="..."
                src="/argonreact.png"
            />
          </Media>
        </DropdownToggle>
        {/* User */}
        <Nav className={styles.bellicon}>
          <UncontrolledDropdown nav>
            <DropdownToggle nav className={styles.icon}>
              <i className="ni ni-bell-55" />
            </DropdownToggle>
            <DropdownMenu
              aria-labelledby="navbar-default_dropdown_1"
              className="dropdown-menu-arrow"
              right
            >
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav>
            <DropdownToggle nav>
              <Media className={styles.bellicon}>
                <span className={styles.avatar}>
                  <img
                    alt="..."
                    src="/team1.jpg"
                  />
                </span>
              </Media>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem className="noti-title" header tag="div">
                <h6 className="text-overflow m-0">Welcome!</h6>
              </DropdownItem>
                          <DropdownItem>
                              <Link href="/profile" >
                                  <a className={styles.profileoption}>
                                        <i className="ni ni-single-02" />
                                        <span>My profile</span>
                                  </a>
                                  </Link>
                          </DropdownItem>
                      <DropdownItem>
                          <Link href="/profile" >
                  <a className={styles.profileoption}>
                                  <i className="ni ni-settings-gear-65" />
                                  <span>Settings</span>
                              </a>
                          </Link>    
                          </DropdownItem>
                          <DropdownItem>
                              <Link href="/profile" >
                  <a className={styles.profileoption}>
                                      <i className="ni ni-calendar-grid-58" />
                                      <span>Activity</span>
                                  </a>
                              </Link>
                          </DropdownItem>

                          <DropdownItem>
                              <Link href="/profile" >
                  <a className={styles.profileoption}>
                                      <i className="ni ni-support-16" />
                                      <span>Support</span>
                                  </a>
                              </Link>
                          </DropdownItem>
              <DropdownItem divider />
                          <DropdownItem onClick={(e) => e.preventDefault()}>
                              <Link href="/profile" >
                  <a className={styles.profileoption}>
                                      <i className="ni ni-user-run" />
                <span>Logout</span>
                                  </a>
                              </Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {/* Collapse */}
        <Collapse navbar isOpen={collapseOpen}>
          {/* Collapse header */}
                   <div className="navbar-collapse-header d-md-none">
                       <Row>
              {/*          {logo ? (
                <Col className="collapse-brand" xs="6">
                  <img
                    alt="..."
                    src="/argonreact.png" />
                  ) : (
                  <img
                    alt="..."
                    src="/logowhite.png" />
                  )
                </Col>
                  ) : null}  */}
              
              <Col className="collapse-close" xs="6">
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={toggleCollapse}
                >
                  <span />
                  <span />
                </button>
              </Col>
                  </Row>   
                  </div>
          {/* Form */}
          <Form className="mt-4 mb-3 d-md-none">
            <InputGroup className="input-group-rounded input-group-merge">
              <Input
                aria-label="Search"
                className="form-control-rounded form-control-prepended"
                placeholder="Search"
                type="search"
              />
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <span className="fa fa-search" />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Form>
          {/* Navigation */}
          
          <div clasName="navbar-collapse-header d-md-none" >
            <div className={styles.logoimage}>
              <img
                className={styles.image}
                alt="..."
                src="/argonreact.png"
                />
            </div>
            {/* <div className={styles.optionsmenu}>
              <Nav className={styles.opt}>{createLinks(routes)}</Nav>
                </div>*/}
            <div className={styles.optionsmenu}>
              <div className={styles.opt}>
                {(() => {
                  if (router.asPath === "/") {
                    return (
                      <div className={styles.optionsss}>
                      <Link href="/">
                        <div className={styles.option1}>
                          <a className={styles.ops1}>
                            <i className="ni ni-tv-2 text-primary" />
                      Dashboard
                    </a>
                        </div>
                      </Link>
                        <button onClick={showSidebar} className={styles.dropdown}>
                          <i class="ni ni-bold-down" />
                        </button>
                        {(() => {
                          if (sidebar === true) {
                            return (
                              <ul onClick={displaySidebar} className={styles.list}>
                                <li onClick={displaySidebar} className={styles.lists}><a className="active" href="/icons">Create Page</a></li>
                                <li className={styles.lists}><a href="#Manage Pages">Manage Pages</a></li>
                                <li className={styles.lists}><a href="#Create Ads">Create Ads</a></li>
                                <li className={styles.lists}><a href="#Manage Ads">Manage Ads</a></li>
                                <li className={styles.lists}><a href="#Activity Logs">Activity Logs</a></li>
                                <li className={styles.lists}><a href="#Setting">Setting</a></li>
                                <li className={styles.lists}><a href="#Log Out">Log Out</a></li>
                              </ul>
                            )
                          }
                          else {
                            return null;
                          }
                        })()}
                        </div>
                    )
                  }

                  else {
                    return (
                      <div className={styles.optionsss}>
                      <Link href="/">
                        <div className={styles.option}>
                          <a className={styles.ops}>
                            <i className="ni ni-tv-2 text-primary" />
                      Dashboard
                    </a>
                        </div>
                      </Link>
                        <button onClick={showSidebar} className={styles.dropdown}>
                          <i class="ni ni-bold-down" />
                        </button>
                        {(() => {
                          if (sidebar === true) {
                            return (
                              <ul onClick={displaySidebar} className={styles.list}>
                                <li onClick={displaySidebar} className={styles.lists}><a className="active" href="/icons">Create Page</a></li>
                                <li className={styles.lists}><a href="#Manage Pages">Manage Pages</a></li>
                                <li className={styles.lists}><a href="#Create Ads">Create Ads</a></li>
                                <li className={styles.lists}><a href="#Manage Ads">Manage Ads</a></li>
                                <li className={styles.lists}><a href="#Activity Logs">Activity Logs</a></li>
                                <li className={styles.lists}><a href="#Setting">Setting</a></li>
                                <li className={styles.lists}><a href="#Log Out">Log Out</a></li>
                              </ul>
                            )
                          }
                          else {
                            return null;
                          }
                        })()}
                        </div>
                    )
                  }
                })()}
              </div>
              <div className={styles.opt}>
                {(() => {
                  if (router.asPath === "/profile") {
                    return (
                      <div className={styles.optionsss}>
                      <Link href="/profile">
                        <div className={styles.option1}>
                          <a className={styles.ops1}>
                            <i className="ni ni-single-02 " />
                      User
                          </a>
                        </div>
                      </Link>
                        <button className={styles.dropdown}>
                          <i class="ni ni-bold-down" />
                        </button>
                        </div>
                    )
                  }
                  else {
                    return (
                      <div className={styles.optionsss}>
                      <Link href="/profile">
                        <div className={styles.option}>
                          <a className={styles.ops}>
                            <i className="ni ni-single-02 " />
                      User
                          </a>
                        </div>
                      </Link>
                      <button className={styles.dropdown}>
                          <i class="ni ni-bold-down" />
                        </button>
                      </div>
                    )
                  }
                })()}
              </div>
              <div className={styles.opt}>
                {(() => {
                  if (router.asPath === "/tables") {
                    return (
                      <div className={styles.optionsss}>
                      <Link href="/tables">
                        <div className={styles.option1}>
                          <a className={styles.ops1}>
                            <i className="ni ni-bullet-list-67 text-info" />
                      Services
                          </a>
                        </div>
                        </Link>
                        <button className={styles.dropdown}>
                          <i class="ni ni-bold-down" />
                        </button>
                        </div>
                    )
                  }
                  else {
                    return (
                      <div className={styles.optionsss}>
                      <Link href="/tables">
                        <div className={styles.option}>
                          <a className={styles.ops}>
                            <i className="ni ni-bullet-list-67 text-info" />
                      Services
                          </a>
                        </div>
                        </Link>
                        <button className={styles.dropdown}>
                          <i class="ni ni-bold-down" />
                        </button>
                        </div>
                    )
                  }
                })()}
              </div>
            </div>
            </div>
        </Collapse>
      </Container>
    </Navbar>
  );
};

Sidebar.defaultProps = {
  routes: [{}],
};

Sidebar.propTypes = {
  // links that will be displayed inside the component
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the image src of the logo
    imgSrc: PropTypes.string.isRequired,
    // the alt for the img
    imgAlt: PropTypes.string.isRequired,
  }),
};

export default Sidebar;
