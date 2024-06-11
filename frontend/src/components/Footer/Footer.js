import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: #141414;
  color: white;
  padding: 20px;
  text-align: center;
`;

const FooterLink = styled.a`
  color: white;
  margin: 0 10px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <div>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
      </div>
      <div>&copy; 2024 Good2Know. All rights reserved.</div>
    </FooterContainer>
  );
}

export default Footer;
