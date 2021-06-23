import React from "react";
import styles from "../styles/Loginfooter.module.css";

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

const Loginfooter = () => {
    return (
        <>
            <footer className={styles.py5}>
                <Container>
                    <Row className={styles.main}>
                        <Col xl="6">
                            <div className={styles.copyright} >
                                © {new Date().getFullYear()}{" "}
                                <a
                                    className={styles.creative}
                                    href="https://www.creative-tim.com?ref=adr-auth-footer"
                                    target="_blank"
                                >
                                    Creative Tim
                </a>
                            </div>
                        </Col>
                        <Col xl="6">
                            <Nav className={styles.others}>
                                <NavItem>
                                    <NavLink
                                        className={styles.other}
                                        href="https://www.creative-tim.com?ref=adr-auth-footer"
                                        target="_blank"
                                    >
                                        Creative Tim
                  </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={styles.other}
                                        href="https://www.creative-tim.com/presentation?ref=adr-auth-footer"
                                        target="_blank"
                                    >
                                        About Us
                  </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={styles.other}
                                        href="http://blog.creative-tim.com?ref=adr-auth-footer"
                                        target="_blank"
                                    >
                                        Blog
                  </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={styles.other}
                                        href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md?ref=adr-auth-footer"
                                        target="_blank"
                                    >
                                        MIT License
                  </NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default Loginfooter;
