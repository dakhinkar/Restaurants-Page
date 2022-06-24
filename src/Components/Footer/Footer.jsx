import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import './Footer.css';
import {
  Box,
  Heading,
  Column,
  Container,
  SubHeading,
  Row,
  SocialMedia,
} from "./FooterStyle";

const Footer = () => {

  

  return (
    <Box>
      <SocialMedia>
        <Heading style={{ margin: "10px" }}>Get connected with us on social networks:</Heading>
        <div style={{ flexDirection: "row" }}>
          <FontAwesomeIcon icon={faInstagram} className='icon'/>

          <FontAwesomeIcon icon={faFacebook} className='icon' />

          <FontAwesomeIcon icon={faTwitter}  className='icon' />

          <FontAwesomeIcon icon={faLinkedin}  className='icon'/>
        </div>
      </SocialMedia>

      <Container>
        <Row>
          <Column>
            <Heading>Address:</Heading>
            <SubHeading>Welcome50,</SubHeading>
            <SubHeading>Near the shivaji Choike,</SubHeading>
            <SubHeading>Chembur East</SubHeading>
            <SubHeading>pin code : 400017</SubHeading>
          </Column>
          <Column>
            <Heading>Our Service</Heading>
          </Column>
          <Column>
            <Heading>Useful Links</Heading>
          </Column>
        </Row>
      </Container>
      <h6
        style={{
          color: "white",
          backgroundColor: "gray",
          textAlign: "center",
          margin: "0",
          padding: "5px",
        }}
      >
        © 2021 Copyright: welcome50.com
      </h6>
    </Box>
  );
};

export default Footer;
