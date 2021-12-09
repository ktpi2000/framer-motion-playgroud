import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 400px;
  height: 300px;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: green;
  border-radius: 20px;
  position: relative;
`;

const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 50%;
  position: absolute;

  &:first-of-type {
    top: 40px;
    left: 40px;
  }
  &:nth-of-type(2) {
    top: 40px;
    right: 40px;
  }
  &:nth-of-type(3) {
    top: 110px;
    left: 40px;
  }
  &:last-of-type {
    top: 110px;
    right: 40px;
  }
`;

const Button = styled.div`
  width: 60px;
  height: 40px;
  background: white;
  position: absolute;
  top: 10px;
  left: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
`;

const container = {
  hidden: { rotate: -90 },
  show: {
    rotate: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemA = {
  hidden: { scale: 0, top: 40 },
  show: { scale: 1, top: 40 },
};

const itemB = {
  hidden: { scale: 0, top: 110 },
  show: { scale: 1, top: 110 },
};

const Variants = () => {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Box initial="hidden" animate="show" variants={container} key={count}>
        <Circle variants={itemA} />
        <Circle variants={itemA} />
        <Circle variants={itemB} />
        <Circle variants={itemB} />
      </Box>
      <Button onClick={() => setCount(count + 1)}>Retry</Button>
    </Container>
  );
};

export default Variants;
