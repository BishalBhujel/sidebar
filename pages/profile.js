import React from "react";
import styles from '../styles/Profile.module.css';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import UserHeader from "../components/UserHeader.js";
import Sidebar from '../components/Sidebar';

const Profile = () => {
  return (
    <>
      <div className={styles.all}>
        <div className={styles.ele1}>
          <div className={styles.sidebar1}>
            <Sidebar />
            </div>
        </div>
        <div className={styles.ele2}>
      <UserHeader />
      {/* Page content */}
      <Container className={styles.main} fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className={styles.cardprofile} shadow>
               <Row className="justify-content-center">
                              <Col className="order-lg-2" lg="3">
                  <div className={styles.cardprofileimage}>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                     <img
                        alt="..."
                        className={styles.roundedcircle}
                        src="/team4.jpg"
                      />
                    </a>
                  </div>
                </Col>
                    </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className={styles.justifycontentbetween}>
                  <Button
                    className={styles.connect}
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Connect
                  </Button>
                  <Button
                    className={styles.floatright}
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Message
                  </Button>
                </div>
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                    <div className={styles.col}>
                                      <div className={styles.cardprofilestats}>
                        <div className={styles.box}>
                            <span className={styles.heading}>22</span>
                            <span className={styles.description }>Friends</span>
                      </div>
                        <div className={styles.box}>
                            <span className={styles.heading}>10</span>
                            <span className={styles.description}>Photos</span>
                      </div>
                        <div className={styles.box}>
                            <span className={styles.heading}>89</span>
                            <span className={styles.description}>Comments</span>
                      </div>
                    </div>
                  </div>
                </Row>
                              <div className={styles.textcenter}>
                                  <h3 className={styles.username}>
                                      Jessica Jones
                    <span className={styles.fontweightlight}>, 27</span>
                  </h3>
                  <div className={styles.location}>
                    <i className="ni location_pin mr-2" />
                    Bucharest, Romania
                  </div>
                  <div className={styles.occupation}>
                    <i className="ni business_briefcase-24 mr-2" />
                    Solution Manager - Creative Tim Officer
                  </div>
                                  <div className={styles.education}>
                    <i className="ni education_hat mr-2" />
                    University of Computer Science
                  </div>
                                  <hr className={styles.my4} />
                  <p className={styles.about}>
                    Ryan — the name taken by Melbourne-raised, Brooklyn-based
                    Nick Murphy — writes, performs and records all of his own
                    music.
                  </p>
                                  <a className={styles.showmore} href="#pablo" onClick={(e) => e.preventDefault()}>
                    Show more
                  </a>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
                      <Card className={styles.bgsecondary} shadow>
                          <CardHeader className={styles.bgwhite} border-0>
                              <Row className={styles.alignitemscenter}>
                  <Col xs="8">
                                      <h3 className={styles.myacc}>My account</h3>
                  </Col>
                  <Col className={styles.textright} xs="4">
                    <Button
                      className={styles.setting}
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Settings
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                    <h6 className={styles.headingsmall} text-muted mb-4>
                        User information
                    </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className={styles.formcontrollabel}
                            htmlFor="input-username"
                          >
                            Username
                          </label>
                          <Input
                            className={styles.formcontrolalternative}
                            defaultValue="lucky.jesse"
                            id="input-username"
                            placeholder="Username"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className={styles.formcontrollabel}
                            htmlFor="input-email"
                          >
                            Email address
                          </label>
                          <Input
                            className={styles.formcontrolalternative}
                            id="input-email"
                            placeholder="jesse@example.com"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className={styles.formcontrollabel}
                            htmlFor="input-first-name"
                          >
                            First name
                          </label>
                          <Input
                            className={styles.formcontrolalternative}
                            defaultValue="Lucky"
                            id="input-first-name"
                            placeholder="First name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className={styles.formcontrollabel}
                            htmlFor="input-last-name"
                          >
                            Last name
                          </label>
                          <Input
                            className={styles.formcontrolalternative}
                            defaultValue="Jesse"
                            id="input-last-name"
                            placeholder="Last name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className={styles.headingsmall} text-muted mb-4>
                    Contact information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className={styles.formcontrollabel}
                            htmlFor="input-address"
                          >
                            Address
                          </label>
                          <Input
                            className={styles.formcontrolalternative}
                            defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                            id="input-address"
                            placeholder="Home Address"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className={styles.formcontrollabel}
                            htmlFor="input-city"
                          >
                            City
                          </label>
                          <Input
                            className={styles.formcontrolalternative}
                            defaultValue="New York"
                            id="input-city"
                            placeholder="City"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className={styles.formcontrollabel}
                            htmlFor="input-country"
                          >
                            Country
                          </label>
                          <Input
                            className={styles.formcontrolalternative}
                            defaultValue="United States"
                            id="input-country"
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className={styles.formcontrollabel}
                            htmlFor="input-country"
                          >
                            Postal code
                          </label>
                          <Input
                            className={styles.formcontrolalternative}
                            id="input-postal-code"
                            placeholder="Postal code"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Description */}
                                  <h6 className={styles.headingsmall} text-muted mb-4>About me</h6>
                  <div className="pl-lg-4">
                    <FormGroup>
                                          <label className={styles.formcontrollabel}>About Me</label>
                      <Input
                        className={styles.formcontrolalternative}
                        placeholder="A few words about you ..."
                        rows="4"
                        defaultValue="A beautiful Dashboard for Bootstrap 4. It is Free and Open Source."
                        type="textarea"
                      />
                    </FormGroup>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      </div>
      </div>
    </>
  );
};

export default Profile;
