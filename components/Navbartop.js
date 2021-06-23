import React from 'react'
import styles from '../styles/Navbar.module.css';
import { Link } from 'next/link';
// reactstrap components
import {
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Form,
    FormGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
    InputGroup,
    Navbar,
    Nav,
    Container,
    Media,
} from "reactstrap";

import { useRouter } from "next/router";

//const Navbartop = (props) => {
function Navbartop() {
    const router = useRouter();


    return (
        <>
            <Navbar className={styles.navbar} expand="md" id="navbar-main">
                <Container fluid>
                    {/*  <Link
                        className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
                        to="/"
                    >
                        {props.brandText}
                  </Link>    */}

                    <div className={styles.paths}>
                        {(() => {
                            if (router.asPath === "/icons") {
                                return (
                                    <div className={styles.pathName}>Icons</div>
                                )
                            }

                            else if (router.asPath === "/"){
                                return (
                                    <div className={styles.pathName}>Dashboard</div>
                                )
                            }
                            else if (router.asPath === "/tables") {
                                return (
                                    <div className={styles.pathName}>Tables</div>
                                )
                            }

                            else if (router.asPath === "/maps") {
                                return (
                                    <div className={styles.pathName}>Maps</div>
                                )
                            }

                            else {
                                return (
                                    <div className={styles.pathName}>Profile</div>
                                )
                            }
                        })()}
                    </div>

                    <Form className={styles.navbarSearch} >
                        <FormGroup className={styles.mb0}>
                            <InputGroup className={styles.inputgroupalternative}>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText className={styles.icon}>
                                        <i className="fas fa-search" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input className={styles.inputalternative} placeholder="Search" type="text" />
                            </InputGroup>
                        </FormGroup>
                    </Form>
                    <Nav className={styles.option} navbar>
                        <UncontrolledDropdown nav>
                            <DropdownToggle className={styles.media} nav>
                                <Media className={styles.itemcenter}>
                                    <span className={styles.avatar}>
                                        <img
                                            alt="..."
                                            src="/team4.jpg"
                                        />
                                    </span>
                                    <Media className={styles.textbox}>
                                        <span className="mb-0 text-sm font-weight-bold">
                                            Jessica Jones
                    </span>
                                    </Media>
                                </Media>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                                <DropdownItem className="noti-title" header tag="div">
                                    <h6 className="text-overflow m-0">Welcome!</h6>
                                </DropdownItem>
                                <DropdownItem to="/admin/user-profile" tag={Link}>
                                    <i className="ni ni-single-02" />
                                    <span>My profile</span>
                                </DropdownItem>
                                <DropdownItem to="/admin/user-profile" tag={Link}>
                                    <i className="ni ni-settings-gear-65" />
                                    <span>Settings</span>
                                </DropdownItem>
                                <DropdownItem to="/admin/user-profile" tag={Link}>
                                    <i className="ni ni-calendar-grid-58" />
                                    <span>Activity</span>
                                </DropdownItem>
                                <DropdownItem to="/admin/user-profile" tag={Link}>
                                    <i className="ni ni-support-16" />
                                    <span>Support</span>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                                    <i className="ni ni-user-run" />
                                    <span>Logout</span>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Navbartop;
