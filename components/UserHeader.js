import React from "react";
import styles from '../styles/Profile.module.css';

import Navbartop from './Navbartop.js';

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

const UserHeader = () => {
  return (
    <>
      <Navbartop />
          {/*<Header />*/}
      <div
       // className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
              className={styles.backgrounds}
              /*style={{
          minHeight: "600px",
          backgroundImage:"/profile-cover.jpg",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}*/
          >
              <div className={styles.transparent}>
        {/* Mask */}
        
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
                  <Container className={styles.alignitemscenter} fluid>
          <Row>
            <Col lg="7" md="10">
              <h1 className={styles.display2}>Hello Jesse</h1>
                <p className={styles.display3}>
                This is your profile page. You can see the progress you've made
                with your work and manage your projects or assigned tasks
              </p>
            <Button
                className={styles.editprofile}
                color="info"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                Edit profile
              </Button>
            </Col>
          </Row>
        </Container>
              </div>
          </div>
    </>
  );
};

export default UserHeader;
