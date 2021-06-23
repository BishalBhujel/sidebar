import React from "react";
import styles from '../styles/Icon.module.css';
import Sidebar from '../components/Sidebar';
import Adminnavbar from '../components/Adminnavbar';
import styles1 from '../styles/Map.module.css';

// reactstrap components
import { Card, Container, Col } from "reactstrap";
import MapContainer from "../components/GoogleMap";
import GoogleApiWrapper from "../components/GoogleMap";

function Maps() {
    
    return (
        <>
            <div className={styles1.all} >
                <div className={styles1.ele1}>
                    <div className={styles1.sidebar1}>
                        <Sidebar />
                    </div>
                </div>
                <div className={styles1.ele2}>
                    <Adminnavbar />

                    {/* Page content */}
                    <div class="col-xl-12" >
            <Container  className={styles.mapmain} fluid>
                        <Col>
                    <div className={styles.mapdiv}>
                        <Card className={styles.maps} >
                                    <MapContainer />
                                    <GoogleApiWrapper />
                        </Card>
                    </div>
                            </Col>
                           
                        </Container>
                    </div>
                </div>
                </div>
        </>
    );
};

export default Maps;