import Adminnavbar from '../components/Adminnavbar'
import styles from '../styles/Home.module.css'
import React, { useState } from "react";

// node.js library that concatenates classes (strings)
import classnames from "classnames";

// javascipt plugin for creating charts
import Chart from "../components/Chart.js";
import Sidebar from '../components/Sidebar'

// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "../components/Chart.js";

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

if (Chart) {
    parseOptions(Chart, chartOptions());
}

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <div className={styles.all}>
        <div className={styles.ele1}>
          <div className={styles.sidebar1}>
            <Sidebar />
            </div>
        </div>
        <div className={styles.ele2}>
      <Adminnavbar />
      {/* Page content */}
      <Container className={styles.main1} xl="12" fluid>
        <Row>
          <Col  xl="8">
            <Card className={styles.bggradientdefault} >
              <CardHeader className={styles.bgtransparent}>
                <Row className={styles.alignitemscenter}>
                  <div className={styles.col}>
                    <h6 className={styles.heading}>
                      Overview
                    </h6>
                    <h2 className={styles.headingtitle}>Sales value</h2>
                  </div>
                  <div className={styles.col}>
                    <Nav className={styles.justifycontentend} pills>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 1,
                          })}
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 1)}
                        >
                          <span className={styles.month}>Month</span>
                          <span className={styles.m}>M</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 2,
                          })}
                          data-toggle="tab"
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 2)}
                        >
                          <span className={styles.month}>Week</span>
                          <span className={styles.m}>W</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className={styles.chart}>
                  <Line
                    data={chartExample1[chartExample1Data]}
                    options={chartExample1.options}
                    getDatasetAtEvent={(e) => console.log(e)}
              />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card className={styles.secondGraph}>
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Performance
                    </h6>
                    <h2 className="mb-0">Total orders</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className={styles.chart}>
                  <Bar
                    data={chartExample2.data}
                    options={chartExample2.options}
            />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className={styles.mt5}>
          <Col className={styles.mb5} xl="8">
            <Card className={styles.shadow}>
              <CardHeader className={styles.border0}>
                <Row className={styles.centeritems}>
                  <div className={styles.col}>
                    <h3 className={styles.mb0}>Page visits</h3>
                  </div>
                  <div className={styles.textright}>
                    <Button
                      className={styles.button}
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className={styles.table} responsive>
                <thead className={styles.theadlight}>
                  <tr>
                    <th scope="col">Page name</th>
                    <th scope="col">Visitors</th>
                    <th scope="col">Unique users</th>
                    <th scope="col">Bounce rate</th>
                  </tr>
                </thead>
                <tbody className={styles.tbodylist}>
                  <tr>
                    <th scope="row">/argon/</th>
                    <td>4,569</td>
                    <td>340</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 46,53%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/index.html</th>
                    <td>3,985</td>
                    <td>319</td>
                    <td>
                      <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                      46,53%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/charts.html</th>
                    <td>3,513</td>
                    <td>294</td>
                    <td>
                      <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                      36,49%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/tables.html</th>
                    <td>2,050</td>
                    <td>147</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 50,87%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/profile.html</th>
                    <td>1,795</td>
                    <td>190</td>
                    <td>
                      <i className="fas fa-arrow-down text-danger mr-3" />{" "}
                      46,53%
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
          <Col xl="4">
            <Card className={styles.shadow}>
              <CardHeader className={styles.border0}>
                <Row className={styles.centeritems}>
                  <div className={styles.col}>
                    <h3 className={styles.mb0}>Social traffic</h3>
                  </div>
                  <div className={styles.textright}>
                    <Button
                      className={styles.button}
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className={styles.table} responsive>
                <thead className={styles.theadlight}>
                  <tr>
                    <th scope="col">Referral</th>
                    <th scope="col">Visitors</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody className={styles.tbodylist}>
                  <tr>
                    <th scope="row">Viber</th>
                    <td>1,480</td>
                    <td>
                      <div className={styles.completion}>
                            <span className={styles.value}>60%</span>
                        <div>
                              <Progress
                                className={styles.bar1}
                            max="100"
                            value="60"
                            barClassName="bg-danger"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Facebook</th>
                    <td>5,480</td>
                    <td>
                          <div className={styles.completion}>
                            <span className={styles.value}>70%</span>
                        <div>
                              <Progress
                                className={styles.bar1}
                            max="100"
                            value="70"
                            barClassName="bg-success"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Google</th>
                    <td>4,807</td>
                    <td>
                          <div className={styles.completion}>
                        <span className={styles.value}>80%</span>
                        <div>
                              <Progress
                                className={styles.bar1}
                                max="100"
                                value="80" />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Instagram</th>
                    <td>3,678</td>
                    <td>
                          <div className={styles.completion}>
                            <span className={styles.value}>75%</span>
                        <div>
                              <Progress
                                className={styles.bar1}
                            max="100"
                            value="75"
                            barClassName="bg-info"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">twitter</th>
                    <td>2,645</td>
                    <td>
                          <div className={styles.completion}>
                            <span className={styles.value}>30%</span>
                        <div>
                              <Progress
                                className={styles.bar1}
                            max="100"
                            value="30"
                            barClassName="bg-warning"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Index;
