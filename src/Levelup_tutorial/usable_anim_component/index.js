import React from "react";
import Layout from "./component/Layout/Layout";
import styled from "styled-components";
import Fade from "./component/usableComponent/Fade";
import Slide from "./component/usableComponent/Slide";

const Button = styled.button`
  display: block;
  padding: 0.5rem 1rem;
  border: 1px solid darkcyan;
  outline: none;
  margin: 1rem;
  color: black;
  background-color: lightcyan;
  cursor: pointer;
  position: fixed;
  top: 3rem;
  left: 3rem;
`;

function App() {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <Layout>
      <Button onClick={() => setIsActive((prev) => !prev)}>toggle</Button>
      <Fade isActive={isActive}>Hi</Fade>
      <Slide isActive={isActive} direction={-1}>
        Heloo
      </Slide>
      <Slide isActive={isActive} direction={1}>
        HEY
      </Slide>
    </Layout>
  );
}

export default App;
