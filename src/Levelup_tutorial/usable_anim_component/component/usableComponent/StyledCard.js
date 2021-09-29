import styled from "styled-components";
import { motion } from "framer-motion";
export const Card = styled(motion.div)`
  max-width: 190px;
  width: 100%;
  background: darkcyan;
  border-radius: 0.8rem;
  height: 240px;
  box-shadow: 1.3px 3px 5px #333;
  color: white;
  margin: 0 auto;
  font-size: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  &:first-of-type {
    margin-top: 1rem;
  }
`;
