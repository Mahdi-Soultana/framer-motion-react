// import React from "react ";
import { motion } from "framer-motion";
import styled from "styled-components";
const StyledCard = styled(motion.div)`
  height: 100%;
  width: 240px;
  display: flex;
  flex-direction: column;
  margin: 0rem 1rem 1rem;

  background-color: lightcoral;
  box-shadow: 0 0 3px black;
  background: url(${(p) =>
      p.url ||
      "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"})
    no-repeat center center/cover;
  filter: blur(0px);
  position: relative;

  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: ${(p) => p.forground || "rgba(0, 0, 0, 0.5)"};
    z-index: 1;
    transition: 0.3s all;
  }
  &:hover:after {
    background-color: rgba(0, 0, 0, 0);
  }
  &:hover {
    filter: blur(0.8px);
    box-shadow: 0 0 6px ${(p) => p.forground || "rgba(0, 0, 0, 0.5)"};
  }
  & button {
    cursor: pointer;
    position: relative;
    z-index: 2;
  }
`;
const item = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0 },
};
function Card(props) {
  return (
    <StyledCard forground={props.forground} url={props.url} variants={item}>
      <button>Buy</button>
    </StyledCard>
  );
}
export default Card;
