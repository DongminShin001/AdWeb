import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #141414;
  color: white;
  padding: 15px 20px;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 16px;
  &:hover {
    text-decoration: underline;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <TopSection>
        <Logo>Good2Know</Logo>
        <NavLinks>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">News</NavLink>
          <NavLink href="#">Community</NavLink>
        </NavLinks>
      </TopSection>
    </HeaderContainer>
  );
}

export default Header;
