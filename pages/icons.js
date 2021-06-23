import React, { useState } from 'react';
import styles from '../styles/Icon.module.css';
import Sidebar from '../components/Sidebar.js'
import Adminnavbar from '../components/Adminnavbar';

// react component that copies the given text inside your clipboard
import { CopyToClipboard }  from "react-copy-to-clipboard";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";


const Icons = () => {
  const [copiedText, setCopiedText] = useState();
  return (
    <>
      <div className={styles.all}>
        <div className={styles.ele1}>
          <div className={styles.sidebar1}>
            <Sidebar />
            </div>
        </div>
        <div className={styles.ele2}>
      <Adminnavbar/>

      {/* Page content */}
      <Container className={styles.main} fluid>
        {/* Table */}
        <Row>
          <div className={styles.col}>
            <Card className={styles.shadow}>
              <CardHeader className={styles.bgTransparent}>
                <h3 className={styles.icon}>Icons</h3>
              </CardHeader>
              <CardBody>
                <Row className={styles.iconExamples}>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-active-40"}
                      onCopy={() => setCopiedText("ni ni-active-40")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        id="tooltip982655500"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                            <i className="ni ni-active-40" />
                          <span className={styles.Span}>active-40</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip982655500"
                    >
                      {copiedText === "ni ni-active-40"
                        ? "This was Copied!"
                        : "Copy To Clipboard"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-air-baloon"}
                      onCopy={() => setCopiedText("ni ni-air-baloon")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="air-baloon"
                        id="tooltip47550434"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-air-baloon" />
                          <span className={styles.Span}>air-baloon</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip47550434"
                    >
                      {copiedText === "ni ni-air-baloon"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-album-2"}
                      onCopy={() => setCopiedText("ni ni-album-2")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="album-2"
                        id="tooltip945481346"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-album-2" />
                          <span className={styles.Span}>album-2</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip945481346"
                    >
                      {copiedText === "ni ni-album-2"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-align-center"}
                      onCopy={() => setCopiedText("ni ni-align-center")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="align-center"
                        id="tooltip662352101"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-align-center" />
                          <span className={styles.Span}>align-center</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip662352101"
                    >
                      {copiedText === "ni ni-align-center"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-left-2"}
                      onCopy={() => setCopiedText("ni ni-align-left-2")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="align-left-2"
                        id="tooltip125499785"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-align-left-2" />
                          <span className={styles.Span}>align-left-2</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip125499785"
                    >
                      {copiedText === "ni ni-align-left-2"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-ambulance"}
                      onCopy={() => setCopiedText("ni ni-ambulance")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="ambulance"
                        id="tooltip382136785"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-ambulance" />
                          <span className={styles.Span}>ambulance</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip382136785"
                    >
                      {copiedText === "ni ni-ambulance"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-asdasdsafsdsad"}
                      onCopy={() => setCopiedText("ni ni-app")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="app"
                        id="tooltip3354607"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-app" />
                          <span className={styles.Span}>app</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip3354607"
                    >
                      {copiedText === "ni ni-app"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-archive-2"}
                      onCopy={() => setCopiedText("ni ni-archive-2")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="archive-2"
                        id="tooltip949558633"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-archive-2" />
                          <span className={styles.Span}>archive-2</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip949558633"
                    >
                      {copiedText === "ni ni-archive-2"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-atom"}
                      onCopy={() => setCopiedText("ni ni-atom")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="atom"
                        id="tooltip742747005"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-atom" />
                          <span className={styles.Span}>atom</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip742747005"
                    >
                      {copiedText === "ni ni-atom"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-badge"}
                      onCopy={() => setCopiedText("ni ni-badge")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="badge"
                        id="tooltip488565068"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-badge" />
                          <span className={styles.Span}>badge</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip488565068"
                    >
                      {copiedText === "ni ni-badge"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-bag-17"}
                      onCopy={() => setCopiedText("ni ni-bag-17")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="bag-17"
                        id="tooltip163626790"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-bag-17" />
                          <span className={styles.Span}>bag-17</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip163626790"
                    >
                      {copiedText === "ni ni-bag-17"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-basket"}
                      onCopy={() => setCopiedText("ni ni-basket")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="basket"
                        id="tooltip387253692"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-basket" />
                          <span className={styles.Span}>basket</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip387253692"
                    >
                      {copiedText === "ni ni-basket"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-bell-55"}
                      onCopy={() => setCopiedText("ni ni-bell-55")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="bell-55"
                        id="tooltip126752761"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-bell-55" />
                          <span className={styles.Span}>bell-55</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip126752761"
                    >
                      {copiedText === "ni ni-bell-55"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-bold-down"}
                      onCopy={() => setCopiedText("ni ni-bold-down")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="bold-down"
                        id="tooltip819281856"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-bold-down" />
                          <span className={styles.Span}>bold-down</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip819281856"
                    >
                      {copiedText === "ni ni-bold-down"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-bold-left"}
                      onCopy={() => setCopiedText("ni ni-bold-left")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="bold-left"
                        id="tooltip881699027"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-bold-left" />
                          <span className={styles.Span}>bold-left</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip881699027"
                    >
                      {copiedText === "ni ni-bold-left"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-bold-right"}
                      onCopy={() => setCopiedText("ni ni-bold-right")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="bold-right"
                        id="tooltip208507461"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-bold-right" />
                          <span className={styles.Span}>bold-right</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip208507461"
                    >
                      {copiedText === "ni ni-bold-right"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-bold-up"}
                      onCopy={() => setCopiedText("ni ni-bold-up")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="bold-up"
                        id="tooltip105289310"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-bold-up" />
                          <span className={styles.Span}>bold-up</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip105289310"
                    >
                      {copiedText === "ni ni-bold-up"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-bold"}
                      onCopy={() => setCopiedText("ni ni-bold")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="bold"
                        id="tooltip832362262"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-bold" />
                          <span className={styles.Span}>bold</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip832362262"
                    >
                      {copiedText === "ni ni-bold"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-book-bookmark"}
                      onCopy={() => setCopiedText("ni ni-book-bookmark")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="book-bookmark"
                        id="tooltip606002875"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-book-bookmark" />
                          <span className={styles.Span}>book-bookmark</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip606002875"
                    >
                      {copiedText === "ni ni-book-bookmark"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-books"}
                      onCopy={() => setCopiedText("ni ni-books")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="books"
                        id="tooltip484529730"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-books" />
                          <span className={styles.Span}>books</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip484529730"
                    >
                      {copiedText === "ni ni-books"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-box-2"}
                      onCopy={() => setCopiedText("ni ni-box-2")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="box-2"
                        id="tooltip509205883"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-box-2" />
                          <span className={styles.Span}>box-2</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip509205883"
                    >
                      {copiedText === "ni ni-box-2"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-briefcase-24"}
                      onCopy={() => setCopiedText("ni ni-briefcase-24")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="briefcase-24"
                        id="tooltip147778056"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-briefcase-24" />
                          <span className={styles.Span}>briefcase-24</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip147778056"
                    >
                      {copiedText === "ni ni-briefcase-24"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-building"}
                      onCopy={() => setCopiedText("ni ni-building")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="building"
                        id="tooltip157423388"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-building" />
                          <span className={styles.Span}>building</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip157423388"
                    >
                      {copiedText === "ni ni-building"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-bulb-61"}
                      onCopy={() => setCopiedText("ni ni-bulb-61")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="bulb-61"
                        id="tooltip126210465"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-bulb-61" />
                          <span className={styles.Span}>bulb-61</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip126210465"
                    >
                      {copiedText === "ni ni-bulb-61"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-list-67"}
                      onCopy={() => setCopiedText("ni ni-list-67")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="bullet-list-67"
                        id="tooltip672244852"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-bullet-list-67" />
                          <span className={styles.Span}>bullet-list-67</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip672244852"
                    >
                      {copiedText === "ni ni-list-67"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-bus-front-12"}
                      onCopy={() => setCopiedText("ni ni-bus-front-12")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="bus-front-12"
                        id="tooltip17383590"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-bus-front-12" />
                          <span className={styles.Span}>bus-front-12</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip17383590"
                    >
                      {copiedText === "ni ni-bus-front-12"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-button-pause"}
                      onCopy={() => setCopiedText("ni ni-button-pause")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="button-pause"
                        id="tooltip721295259"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-button-pause" />
                          <span className={styles.Span}>button-pause</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip721295259"
                    >
                      {copiedText === "ni ni-button-pause"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-button-play"}
                      onCopy={() => setCopiedText("ni ni-button-play")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="button-play"
                        id="tooltip397403700"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-button-play" />
                          <span className={styles.Span}>button-play</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip397403700"
                    >
                      {copiedText === "ni ni-button-play"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-button-power"}
                      onCopy={() => setCopiedText("ni ni-button-power")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="button-power"
                        id="tooltip286478188"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-button-power" />
                          <span className={styles.Span}>button-power</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip286478188"
                    >
                      {copiedText === "ni ni-button-power"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-calendar-grid-58"}
                      onCopy={() => setCopiedText("ni ni-calendar-grid-58")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="calendar-grid-58"
                        id="tooltip332635506"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-calendar-grid-58" />
                          <span className={styles.Span}>calendar-grid-58</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip332635506"
                    >
                      {copiedText === "ni ni-calendar-grid-58"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-camera-compact"}
                      onCopy={() => setCopiedText("ni ni-camera-compact")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="camera-compact"
                        id="tooltip872817724"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-camera-compact" />
                          <span className={styles.Span}>camera-compact</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip872817724"
                    >
                      {copiedText === "ni ni-camera-compact"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-caps-small"}
                      onCopy={() => setCopiedText("ni ni-caps-small")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="caps-small"
                        id="tooltip108271146"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-caps-small" />
                          <span className={styles.Span}>caps-small</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip108271146"
                    >
                      {copiedText === "ni ni-caps-small"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-cart"}
                      onCopy={() => setCopiedText("ni ni-cart")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="cart"
                        id="tooltip315375170"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-cart" />
                          <span className={styles.Span}>cart</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip315375170"
                    >
                      {copiedText === "ni ni-cart"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-chart-bar-32"}
                      onCopy={() => setCopiedText("ni ni-chart-bar-32")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="chart-bar-32"
                        id="tooltip906739900"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-chart-bar-32" />
                          <span className={styles.Span}>chart-bar-32</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip906739900"
                    >
                      {copiedText === "ni ni-chart-bar-32"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-chart-pie-35"}
                      onCopy={() => setCopiedText("ni ni-chart-pie-35")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="chart-pie-35"
                        id="tooltip211198935"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-chart-pie-35" />
                          <span className={styles.Span}>chart-pie-35</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip211198935"
                    >
                      {copiedText === "ni ni-chart-pie-35"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-chat-round"}
                      onCopy={() => setCopiedText("ni ni-chat-round")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="chat-round"
                        id="tooltip452799920"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-chat-round" />
                          <span className={styles.Span}>chat-round</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip452799920"
                    >
                      {copiedText === "ni ni-chat-round"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-check-bold"}
                      onCopy={() => setCopiedText("ni ni-check-bold")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="check-bold"
                        id="tooltip204269497"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-check-bold" />
                          <span className={styles.Span}>check-bold</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip204269497"
                    >
                      {copiedText === "ni ni-check-bold"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-circle-08"}
                      onCopy={() => setCopiedText("ni ni-circle-08")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="circle-08"
                        id="tooltip63796078"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-circle-08" />
                          <span className={styles.Span}>circle-08</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip63796078"
                    >
                      {copiedText === "ni ni-circle-08"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-cloud-download-95"}
                      onCopy={() => setCopiedText("ni ni-cloud-download-95")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="cloud-download-95"
                        id="tooltip171823822"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-cloud-download-95" />
                          <span className={styles.Span}>cloud-download-95</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip171823822"
                    >
                      {copiedText === "ni ni-cloud-download-95"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-cloud-upload-96"}
                      onCopy={() => setCopiedText("ni ni-cloud-upload-96")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="cloud-upload-96"
                        id="tooltip603641354"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-cloud-upload-96" />
                          <span className={styles.Span}>cloud-upload-96</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip603641354"
                    >
                      {copiedText === "ni ni-cloud-upload-96"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-compass-04"}
                      onCopy={() => setCopiedText("ni ni-compass-04")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="compass-04"
                        id="tooltip138747611"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-compass-04" />
                          <span className={styles.Span}>compass-04</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip138747611"
                    >
                      {copiedText === "ni ni-compass-04"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-controller"}
                      onCopy={() => setCopiedText("ni ni-controller")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="controller"
                        id="tooltip477306514"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-controller" />
                          <span className={styles.Span}>controller</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip477306514"
                    >
                      {copiedText === "ni ni-controller"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-credit-card"}
                      onCopy={() => setCopiedText("ni ni-credit-card")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="credit-card"
                        id="tooltip672313572"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-credit-card" />
                          <span className={styles.Span}>credit-card</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip672313572"
                    >
                      {copiedText === "ni ni-credit-card"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-curved-next"}
                      onCopy={() => setCopiedText("ni ni-curved-next")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="curved-next"
                        id="tooltip228405488"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-curved-next" />
                          <span className={styles.Span}>curved-next</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip228405488"
                    >
                      {copiedText === "ni ni-curved-next"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-delivery-fast"}
                      onCopy={() => setCopiedText("ni ni-delivery-fast")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="delivery-fast"
                        id="tooltip405559"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-delivery-fast" />
                          <span className={styles.Span}>delivery-fast</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip405559"
                    >
                      {copiedText === "ni ni-delivery-fast"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-diamond"}
                      onCopy={() => setCopiedText("ni ni-diamond")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="diamond"
                        id="tooltip842334307"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-diamond" />
                          <span className={styles.Span}>diamond</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip842334307"
                    >
                      {copiedText === "ni ni-diamond"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-email-83"}
                      onCopy={() => setCopiedText("ni ni-email-83")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="email-83"
                        id="tooltip695661232"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-email-83" />
                          <span className={styles.Span}>email-83</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip695661232"
                    >
                      {copiedText === "ni ni-email-83"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-fat-add"}
                      onCopy={() => setCopiedText("ni ni-fat-add")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="fat-add"
                        id="tooltip112280005"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-fat-add" />
                          <span className={styles.Span}>fat-add</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip112280005"
                    >
                      {copiedText === "ni ni-fat-add"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-fat-delete"}
                      onCopy={() => setCopiedText("ni ni-fat-delete")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="fat-delete"
                        id="tooltip361927124"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-fat-delete" />
                          <span className={styles.Span}>fat-delete</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip361927124"
                    >
                      {copiedText === "ni ni-fat-delete"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-fat-remove"}
                      onCopy={() => setCopiedText("ni ni-fat-remove")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="fat-remove"
                        id="tooltip451275187"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-fat-remove" />
                          <span className={styles.Span}>fat-remove</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip451275187"
                    >
                      {copiedText === "ni ni-fat-remove"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-favourite-28"}
                      onCopy={() => setCopiedText("ni ni-favourite-28")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="favourite-28"
                        id="tooltip893689512"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-favourite-28" />
                          <span className={styles.Span}>favourite-28</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip893689512"
                    >
                      {copiedText === "ni ni-favourite-28"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-folder-17"}
                      onCopy={() => setCopiedText("ni ni-folder-17")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="folder-17"
                        id="tooltip988458715"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-folder-17" />
                          <span className={styles.Span}>folder-17</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip988458715"
                    >
                      {copiedText === "ni ni-folder-17"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-glasses-2"}
                      onCopy={() => setCopiedText("ni ni-glasses-2")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="glasses-2"
                        id="tooltip576477258"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-glasses-2" />
                          <span className={styles.Span}>glasses-2</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip576477258"
                    >
                      {copiedText === "ni ni-glasses-2"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-hat-3"}
                      onCopy={() => setCopiedText("ni ni-hat-3")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="hat-3"
                        id="tooltip977228923"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-hat-3" />
                          <span className={styles.Span}>hat-3</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip977228923"
                    >
                      {copiedText === "ni ni-hat-3"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-headphones"}
                      onCopy={() => setCopiedText("ni ni-headphones")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="headphones"
                        id="tooltip711983709"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-headphones" />
                          <span className={styles.Span}>headphones</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip711983709"
                    >
                      {copiedText === "ni ni-headphones"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-html5"}
                      onCopy={() => setCopiedText("ni ni-html5")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="html5"
                        id="tooltip346497134"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-html5" />
                          <span className={styles.Span}>html5</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip346497134"
                    >
                      {copiedText === "ni ni-html5"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-istanbul"}
                      onCopy={() => setCopiedText("ni ni-istanbul")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="istanbul"
                        id="tooltip344591402"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-istanbul" />
                          <span className={styles.Span}>istanbul</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip344591402"
                    >
                      {copiedText === "ni ni-istanbul"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-circle-08"}
                      onCopy={() => setCopiedText("ni ni-circle-08")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="circle-08"
                        id="tooltip815029398"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-circle-08" />
                          <span className={styles.Span}>circle-08</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip815029398"
                    >
                      {copiedText === "ni ni-circle-08"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-key-25"}
                      onCopy={() => setCopiedText("ni ni-key-25")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="key-25"
                        id="tooltip580511416"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-key-25" />
                          <span className={styles.Span}>key-25</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip580511416"
                    >
                      {copiedText === "ni ni-key-25"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-laptop"}
                      onCopy={() => setCopiedText("ni ni-laptop")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="laptop"
                        id="tooltip455996160"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-laptop" />
                          <span className={styles.Span}>laptop</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip455996160"
                    >
                      {copiedText === "ni ni-laptop"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-like-2"}
                      onCopy={() => setCopiedText("ni ni-like-2")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="like-2"
                        id="tooltip928932853"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-like-2" />
                          <span className={styles.Span}>like-2</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip928932853"
                    >
                      {copiedText === "ni ni-like-2"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-lock-circle-open"}
                      onCopy={() => setCopiedText("ni ni-lock-circle-open")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="lock-circle-open"
                        id="tooltip634042199"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-lock-circle-open" />
                          <span className={styles.Span}>lock-circle-open</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip634042199"
                    >
                      {copiedText === "ni ni-lock-circle-open"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-map-big"}
                      onCopy={() => setCopiedText("ni ni-map-big")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="map-big"
                        id="tooltip615611081"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-map-big" />
                          <span className={styles.Span}>map-big</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip615611081"
                    >
                      {copiedText === "ni ni-map-big"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-mobile-button"}
                      onCopy={() => setCopiedText("ni ni-mobile-button")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="mobile-button"
                        id="tooltip426682279"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-mobile-button" />
                          <span className={styles.Span}>mobile-button</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip426682279"
                    >
                      {copiedText === "ni ni-mobile-button"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-money-coins"}
                      onCopy={() => setCopiedText("ni ni-money-coins")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="money-coins"
                        id="tooltip198953665"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-money-coins" />
                          <span className={styles.Span}>money-coins</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip198953665"
                    >
                      {copiedText === "ni ni-money-coins"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-note-03"}
                      onCopy={() => setCopiedText("ni ni-note-03")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="note-03"
                        id="tooltip909975995"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-note-03" />
                          <span className={styles.Span}>note-03</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip909975995"
                    >
                      {copiedText === "ni ni-note-03"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-notification-70"}
                      onCopy={() => setCopiedText("ni ni-notification-70")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="notification-70"
                        id="tooltip942089221"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-notification-70" />
                          <span className={styles.Span}>notification-70</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip942089221"
                    >
                      {copiedText === "ni ni-notification-70"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-palette"}
                      onCopy={() => setCopiedText("ni ni-palette")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="palette"
                        id="tooltip721048582"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-palette" />
                          <span className={styles.Span}>palette</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip721048582"
                    >
                      {copiedText === "ni ni-palette"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-paper-diploma"}
                      onCopy={() => setCopiedText("ni ni-paper-diploma")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="paper-diploma"
                        id="tooltip875782946"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-paper-diploma" />
                          <span className={styles.Span}>paper-diploma</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip875782946"
                    >
                      {copiedText === "ni ni-paper-diploma"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-pin-3"}
                      onCopy={() => setCopiedText("ni ni-pin-3")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="pin-3"
                        id="tooltip945087492"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-pin-3" />
                          <span className={styles.Span}>pin-3</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip945087492"
                    >
                      {copiedText === "ni ni-pin-3"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-planet"}
                      onCopy={() => setCopiedText("ni ni-planet")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="planet"
                        id="tooltip482139663"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-planet" />
                          <span className={styles.Span}>planet</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip482139663"
                    >
                      {copiedText === "ni ni-planet"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-ruler-pencil"}
                      onCopy={() => setCopiedText("ni ni-ruler-pencil")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="ruler-pencil"
                        id="tooltip693938896"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-ruler-pencil" />
                          <span className={styles.Span}>ruler-pencil</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip693938896"
                    >
                      {copiedText === "ni ni-ruler-pencil"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-satisfied"}
                      onCopy={() => setCopiedText("ni ni-satisfied")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="satisfied"
                        id="tooltip634575265"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-satisfied" />
                          <span className={styles.Span}>satisfied</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip634575265"
                    >
                      {copiedText === "ni ni-satisfied"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-scissors"}
                      onCopy={() => setCopiedText("ni ni-scissors")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="scissors"
                        id="tooltip688473648"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-scissors" />
                          <span className={styles.Span}>scissors</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip688473648"
                    >
                      {copiedText === "ni ni-scissors"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-send"}
                      onCopy={() => setCopiedText("ni ni-send")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="send"
                        id="tooltip161268791"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-send" />
                          <span className={styles.Span}>send</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip161268791"
                    >
                      {copiedText === "ni ni-send"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-settings-gear-65"}
                      onCopy={() => setCopiedText("ni ni-settings-gear-65")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="settings-gear-65"
                        id="tooltip487959296"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-settings-gear-65" />
                          <span className={styles.Span}>settings-gear-65</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip487959296"
                    >
                      {copiedText === "ni ni-settings-gear-65"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-settings"}
                      onCopy={() => setCopiedText("ni ni-settings")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="settings"
                        id="tooltip156598208"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-settings" />
                          <span className={styles.Span}>settings</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip156598208"
                    >
                      {copiedText === "ni ni-settings"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-single-02"}
                      onCopy={() => setCopiedText("ni ni-single-02")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="single-02"
                        id="tooltip487356467"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-single-02" />
                          <span className={styles.Span}>single-02</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip487356467"
                    >
                      {copiedText === "ni ni-single-02"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-single-copy-04"}
                      onCopy={() => setCopiedText("ni ni-single-copy-04")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="single-copy-04"
                        id="tooltip340498904"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-single-copy-04" />
                          <span className={styles.Span}>single-copy-04</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip340498904"
                    >
                      {copiedText === "ni ni-single-copy-04"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-sound-wave"}
                      onCopy={() => setCopiedText("ni ni-sound-wave")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="sound-wave"
                        id="tooltip289156059"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-sound-wave" />
                          <span className={styles.Span}>sound-wave</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip289156059"
                    >
                      {copiedText === "ni ni-sound-wave"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-spaceship"}
                      onCopy={() => setCopiedText("ni ni-spaceship")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="spaceship"
                        id="tooltip603604642"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-spaceship" />
                          <span className={styles.Span}>spaceship</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip603604642"
                    >
                      {copiedText === "ni ni-spaceship"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-square-pin"}
                      onCopy={() => setCopiedText("ni ni-square-pin")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="square-pin"
                        id="tooltip153036405"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-square-pin" />
                          <span className={styles.Span}>square-pin</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip153036405"
                    >
                      {copiedText === "ni ni-square-pin"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-support-16"}
                      onCopy={() => setCopiedText("ni ni-support-16")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="support-16"
                        id="tooltip906422211"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-support-16" />
                          <span className={styles.Span}>support-16</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip906422211"
                    >
                      {copiedText === "ni ni-support-16"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-tablet-button"}
                      onCopy={() => setCopiedText("ni ni-tablet-button")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="tablet-button"
                        id="tooltip517579618"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-tablet-button" />
                          <span className={styles.Span}>tablet-button</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip517579618"
                    >
                      {copiedText === "ni ni-tablet-button"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-tag"}
                      onCopy={() => setCopiedText("ni ni-tag")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="tag"
                        id="tooltip297195808"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-tag" />
                          <span className={styles.Span}>tag</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip297195808"
                    >
                      {copiedText === "ni ni-tag"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-tie-bow"}
                      onCopy={() => setCopiedText("ni ni-tie-bow")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="tie-bow"
                        id="tooltip793084796"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-tie-bow" />
                          <span className={styles.Span}>tie-bow</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip793084796"
                    >
                      {copiedText === "ni ni-tie-bow"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-time-alarm"}
                      onCopy={() => setCopiedText("ni ni-time-alarm")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="time-alarm"
                        id="tooltip258891035"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-time-alarm" />
                          <span className={styles.Span}>time-alarm</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip258891035"
                    >
                      {copiedText === "ni ni-time-alarm"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-trophy"}
                      onCopy={() => setCopiedText("ni ni-trophy")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="trophy"
                        id="tooltip881235890"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-trophy" />
                          <span className={styles.Span}>trophy</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip881235890"
                    >
                      {copiedText === "ni ni-trophy"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-tv-2"}
                      onCopy={() => setCopiedText("ni ni-tv-2")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="tv-2"
                        id="tooltip330279137"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-tv-2" />
                          <span className={styles.Span}>tv-2</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip330279137"
                    >
                      {copiedText === "ni ni-tv-2"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-umbrella-13"}
                      onCopy={() => setCopiedText("ni ni-umbrella-13")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="umbrella-13"
                        id="tooltip412313570"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-umbrella-13" />
                          <span className={styles.Span}>umbrella-13</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip412313570"
                    >
                      {copiedText === "ni ni-umbrella-13"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-user-run"}
                      onCopy={() => setCopiedText("ni ni-user-run")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="user-run"
                        id="tooltip176201858"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-user-run" />
                          <span className={styles.Span}>user-run</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip176201858"
                    >
                      {copiedText === "ni ni-user-run"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-vector"}
                      onCopy={() => setCopiedText("ni ni-vector")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="vector"
                        id="tooltip71164138"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-vector" />
                          <span className={styles.Span}>vector</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip71164138"
                    >
                      {copiedText === "ni ni-vector"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-watch-time"}
                      onCopy={() => setCopiedText("ni ni-watch-time")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="watch-time"
                        id="tooltip495578192"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-watch-time" />
                          <span className={styles.Span}>watch-time</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip495578192"
                    >
                      {copiedText === "ni ni-watch-time"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-world"}
                      onCopy={() => setCopiedText("ni ni-world")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="world"
                        id="tooltip604848245"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-world" />
                          <span className={styles.Span}>world</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip604848245"
                    >
                      {copiedText === "ni ni-world"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-zoom-split-in"}
                      onCopy={() => setCopiedText("ni ni-zoom-split-in")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="zoom-split-in"
                        id="tooltip916423293"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-zoom-split-in" />
                          <span className={styles.Span}>zoom-split-in</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip916423293"
                    >
                      {copiedText === "ni ni-zoom-split-in"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-collection"}
                      onCopy={() => setCopiedText("ni ni-collection")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="collection"
                        id="tooltip142934658"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-collection" />
                          <span className={styles.Span}>collection</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip142934658"
                    >
                      {copiedText === "ni ni-collection"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-image"}
                      onCopy={() => setCopiedText("ni ni-image")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="image"
                        id="tooltip842947283"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-image" />
                          <span className={styles.Span}>image</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip842947283"
                    >
                      {copiedText === "ni ni-image"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-shop"}
                      onCopy={() => setCopiedText("ni ni-shop")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="shop"
                        id="tooltip531866818"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-shop" />
                          <span className={styles.Span}>shop</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip531866818"
                    >
                      {copiedText === "ni ni-shop"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-ungroup"}
                      onCopy={() => setCopiedText("ni ni-ungroup")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="ungroup"
                        id="tooltip470734151"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-ungroup" />
                          <span className={styles.Span}>ungroup</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip470734151"
                    >
                      {copiedText === "ni ni-ungroup"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-world-2"}
                      onCopy={() => setCopiedText("ni ni-world-2")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="world-2"
                        id="tooltip932383030"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-world-2" />
                          <span className={styles.Span}>world-2</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip932383030"
                    >
                      {copiedText === "ni ni-world-2"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-ui-04"}
                      onCopy={() => setCopiedText("ni ni-ui-04")}
                    >
                      <button
                        className={styles.btnIconClipboard}
                        data-clipboard-text="ui-04"
                        id="tooltip9332484"
                        type="button"
                      >
                        <div className={styles.btnIconClipboardDiv}>
                          <i className="ni ni-ui-04" />
                          <span className={styles.Span}>ui-04</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip9332484"
                    >
                      {copiedText === "ni ni-ui-04"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
        </div>
      </div>
    </>
  );
};

export default Icons;
