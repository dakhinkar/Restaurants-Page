import React from "react";

import {
  Box,
  Heading,
  Column,
  Container,
  FooterLink,
  Row,
} from "./FooterStyle";

const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "green", textAlign: "center", marginTop: "-50px" }}>
        I am Footer
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Address:</Heading>
          </Column>
          <Column>
            <Heading>Our Service</Heading>
          </Column>
          <Column>
            <Heading>Useful Links</Heading>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};

export default Footer;
