import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/abdulrahman-reda-28609b2a2"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/abod.reda.1?mibextid=ZbWKwL"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/_xotk/profilecard/?igsh=ZmIxZXNtOGRsNXM3"><img src={navIcon3} alt="" /></a>
            </div>
            <p>+201507064713</p>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}