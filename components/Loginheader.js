import React from "react";
import Link from "next/link";
import styles from '../styles/Loginheader.module.css';
// reactstrap components
import {
    UncontrolledCollapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
} from "reactstrap";

const Loginheader = () => {
    return (
        <>
            <Navbar className={styles.main} expand="md">
                <Container className={styles.px4}>
                    <Link href="/">
                        <img
                            className={styles.logo}
                            alt="..."
                            src="/logowhite.png"
                        />
                    </Link>
                    <button className={styles.navbartoggler} id="navbar-collapse-main">
                        <div className={styles.line} />
                        <div className={styles.line} />
                        <div className={styles.line} />
                    </button>
                    <UncontrolledCollapse navbar toggler="#navbar-collapse-main">
                        <div className={styles.navbarcollapseheader}>
                            <Row>
                                <Col className={styles.collapsebrand} xs="6">
                                    <Link href="/">
                                        <img
                                            className={styles.what}
                                            alt="..."
                                            src="/argonreact.png"
                                        />
                                    </Link>
                                </Col>
                                <Col className={styles.collapseclose} xs="6">
                                    <button className={styles.navbartoggler} id="navbar-collapse-main">
                                        <span />
                                        <span />
                                    </button>
                                </Col>
                            </Row>
                        </div>
                        <Nav className={styles.mlauto} navbar>
                            <NavItem>
                                <Link href="/">
                                <NavLink className={styles.navlinkicon}>
                                    <i className="ni ni-planet" />
                                    <span className={styles.navlinktext}>Dashboard</span>
                                    </NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/user/register">
                                    <NavLink className={styles.navlinkicon}>
                                    <i className="ni ni-circle-08" />
                                        <span className={styles.navlinktext}>Register</span>
                                    </NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/user/login">
                                    <NavLink className={styles.navlinkicon} >
                                    <i className="ni ni-key-25" />
                                        <span className={styles.navlinktext}>Login</span>
                                    </NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/profile">
                                    <NavLink className={styles.navlinkicon} >
                                    <i className="ni ni-single-02" />
                                        <span className={styles.navlinktext}>Profile</span>
                                    </NavLink>
                                </Link>
                            </NavItem>
                        </Nav>
                    </UncontrolledCollapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Loginheader;
