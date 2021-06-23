import React from "react";
import styles from '../../styles/Login.module.css';
import Auth from '../../components/auth';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col,
} from "reactstrap";

function register() {
    return (
        <Auth>
            <Col lg="6" md="7">
                <Card className={styles.main}>
                    <CardHeader className={styles.transparent}>
                        <div className={styles.signIn}>
                            <small>Sign up with</small>
                        </div>
                        <div className={styles.wrapper}>
                            <Button
                                className={styles.btnneutral}
                                color="default"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                            >
                                <span className={styles.btninnericon}>
                                    <img
                                        alt="..."
                                        src="/github.svg"
                                    />
                                </span>
                                <span className={styles.btninnertext}>Github</span>
                            </Button>
                            <Button
                                className={styles.btnneutral}
                                color="default"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                            >
                                <span className={styles.btninnericon}>
                                    <img
                                        alt="..."
                                        src="/google.svg"
                                    />
                                </span>
                                <span className={styles.btninnertext}>Google</span>
                            </Button>
                        </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                        <div className={styles.text}>
                            <small>Or sign up with credentials</small>
                        </div>
                        <Form role="form">
                            <FormGroup className={styles.mb4}>
                                <InputGroup className={styles.inputalternative}>
                                    <InputGroupAddon
                                        className={styles.hold}
                                        addonType="prepend">
                                        <InputGroupText className={styles.icon}>
                                            <i className="ni ni-hat-3" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        className={styles.inputepa}
                                        placeholder="Name"
                                        type="text"
                                    />
                                </InputGroup>
                            </FormGroup>

                            <FormGroup className={styles.mb4}>
                                <InputGroup className={styles.inputalternative}>
                                    <InputGroupAddon
                                        className={styles.hold}
                                        addonType="prepend">
                                        <InputGroupText className={styles.icon}>
                                            <i className="ni ni-email-83" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        className={styles.inputepa}
                                        placeholder="Email"
                                        type="email"
                                        autoComplete="new-email"
                                    />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup className={styles.mb4}>
                                <InputGroup className={styles.inputalternative}>
                                    <InputGroupAddon className={styles.iconHolder} addonType="prepend">
                                        <InputGroupText className={styles.icon}>
                                            <i className="ni ni-lock-circle-open" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input className={styles.inputepa}
                                        placeholder="Password"
                                        type="password"
                                        autoComplete="new-password"
                                    />
                                </InputGroup>
                            </FormGroup>
                            <div className={styles.customcontrol} >
                                <input
                                    className={styles.customcontrolinput}
                                    id=" customCheckLogin"
                                    type="checkbox"
                                />
                                <label
                                    className="custom-control-label"
                                    htmlFor=" customCheckLogin"
                                >
                                    <span className={styles.privacy}>I agree with the
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                            Privacy Policy
                        </a></span>
                                </label>
                            </div>
                            <div className="text-center">
                                <Button className={styles.signup} color="primary" type="button">
                                    Create account
                </Button>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Auth>
    )
}

export default register
