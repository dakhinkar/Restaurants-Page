import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import {
  Box,
  Heading,
  Column,
  Container,
  FooterLink,
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
          <FontAwesomeIcon icon={faInstagram} style={{ margin: "10px" }} />

          <FontAwesomeIcon icon={faFacebook} style={{ margin: "10px" }} />

          <FontAwesomeIcon icon={faTwitter} style={{ margin: "10px" }} />

          <FontAwesomeIcon icon={faLinkedin} style={{ margin: "10px" }} />
        </div>
      </SocialMedia>

      <Container>
        <Row>
          <Column>
            <Heading>Address:</Heading>
            <SubHeading>Wish You to Taste,</SubHeading>
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
      <h3
        style={{
          color: "white",
          backgroundColor: "gray",
          textAlign: "center",
          margin: "0",
          padding: "5px",
        }}
      >
        © 2021 Copyright: MDBootstrap.com
      </h3>
    </Box>
  );
};

export default Footer;
