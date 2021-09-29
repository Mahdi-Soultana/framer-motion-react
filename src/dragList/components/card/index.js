import React, { useRef } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import "./card.css";
const Container = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: hidden;

  background-color: ${(p) => p.bg};
`;
const CardContainer = styled.div`
  height: 280px;
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 1rem;
  /* background-color: orange; */
`;

const Cards = styled(motion.div)`
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`;

const Title = styled(motion.h1)`
  font-size: 2rem;
  color: ${(p) => p.color || "white"};
  font-family: "Poppins", sans-serif;
  margin: 1rem auto;
  text-transform: capitalize;
  position: relative;
  letter-spacing: 2px;
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 5px;
    width: 50px;
    background-color: ${(p) => p.underLineC || "#394"};
  }
`;
const variantMode = {
  hidden: { y: -20 },
  show: {
    y: 0,
    transition: {
      duration: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.16,
    },
  },
};

function CardCompenent(props) {
  const constraintsRef = useRef(null);
  return (
    <Container bg={props.bg}>
      {true && (
        <Title color={props.title.color} underLineC={props.title.underLineC}>
          {props.title.text || "Firniture"}
        </Title>
      )}
      <CardContainer ref={constraintsRef}>
        <Cards
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0.2}
          dragTransition={{
            bounceStiffness: 700,
            bounceDamping: 30,
            // mass: 100,
            // velocity: 100,
            power: 0.2,
          }}
          variants={variantMode}
          initial={"hidden"}
          animate={"show"}
        >
          {props.children}
        </Cards>
      </CardContainer>
    </Container>
  );
}

export default CardCompenent;
