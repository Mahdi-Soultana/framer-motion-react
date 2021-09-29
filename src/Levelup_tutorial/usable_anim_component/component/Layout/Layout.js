import React from "react";

import styled from "styled-components";

const Logo = styled.h1`
  font-size: 2rem;
  color: white;
`;
const Header = styled.h1`
  background-color: darkcyan;
  padding-left: 1rem;
`;
const Main = styled.main``;

function Layout(props) {
  return (
    <>
      <Header>
        <Logo>Framer.Js</Logo>
      </Header>
      <Main {...props} />
    </>
  );
}

export default Layout;
