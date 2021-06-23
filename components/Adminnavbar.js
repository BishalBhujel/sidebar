import React from "react";
import styles from '../styles/Adminnavbar.module.css';
import Navbartop from './Navbartop.js'

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

import "@fortawesome/fontawesome-free/css/all.min.css";

const Adminnavbar = () => {
    return (
        <>
            <div className="col-xl-12">
            <div className={styles.navbar}>
                <Navbartop />
            </div>
            <div className={styles.header}>
                <Container fluid>
                    <div className={styles.headerbody}>
                        {/* Card stats */}
                        <Row>
                            <Col lg="6" xl="3">
                                <Card className={styles.cardstats}>
                                    <CardBody>
                                        <Row>
                                            <div className={styles.col}>
                                                <CardTitle
                                                    tag="h5"
                                                    className={styles.heading}
                                                >
                                                    Traffic
                        </CardTitle>
                                                <span className={styles.data}>
                                                    350,897
                        </span>
                                            </div>
                                            <Col className={styles.colauto}>
                                                <div className={styles.icon}>
                                                    <i className="fas fa-chart-bar" />
                                                </div>
                                            </Col>
                                        </Row>
                                        <p className={styles.mt3 }>
                                            <span className={styles.mr2}>
                                                <i className="fa fa-arrow-up" /> 3.48%
                      </span>{" "}
                                            <span className={styles.textnowrap}>Since last month</span>
                                        </p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="6" xl="3">
                                <Card className={styles.cardstats}>
                                    <CardBody>
                                        <Row>
                                            <div className={styles.col}>
                                                <CardTitle
                                                    tag="h5"
                                                    className={styles.heading}
                                                >
                                                    New users
                        </CardTitle>
                                                <span className={styles.data}>2,356</span>
                                            </div>
                                            <Col className={styles.colauto}>
                                                <div className={styles.icon}>
                                                    <i className="fas fa-chart-pie" />
                                                </div>
                                            </Col>
                                        </Row>
                                        <p className={styles.mt3}>
                                            <span className={styles.mr3}>
                                                <i className="fas fa-arrow-down" /> 3.48%
                      </span>{" "}
                                            <span className={styles.textnowrap}>Since last week</span>
                                        </p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="6" xl="3">
                                <Card className={styles.cardstats}>
                                    <CardBody>
                                        <Row>
                                            <div className={styles.col}>
                                                <CardTitle
                                                    tag="h5"
                                                    className={styles.heading}
                                                >
                                                    Sales
                        </CardTitle>
                                                <span className={styles.data}>924</span>
                                            </div>
                                            <Col className={styles.colauto}>
                                                <div className={styles.icon}>
                                                    <i className="fas fa-users" />
                                                </div>
                                            </Col>
                                        </Row>
                                        <p className={styles.mt3}>
                                            <span className={styles.mr4}>
                                                <i className="fas fa-arrow-down" /> 1.10%
                      </span>{" "}
                                            <span className={styles.textnowrap}>Since yesterday</span>
                                        </p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="6" xl="3">
                                <Card className={styles.cardstats}>
                                    <CardBody>
                                        <Row>
                                            <div className={styles.col}>
                                                <CardTitle
                                                    tag="h5"
                                                    className={styles.heading}
                                                >
                                                    Performance
                        </CardTitle>
                                                <span className={styles.data}>49,65%</span>
                                            </div>
                                            <Col className={styles.colauto}>
                                                <div className={styles.icon}>
                                                    <i className="fas fa-percent" />
                                                </div>
                                            </Col>
                                        </Row>
                                        <p className={styles.mt3}>
                                            <span className={styles.mr2}>
                                                <i className="fas fa-arrow-up" /> 12%
                      </span>{" "}
                                            <span className={styles.textnowrap}>Since last month</span>
                                        </p>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            </div>
        </>
    );
};

export default Adminnavbar;