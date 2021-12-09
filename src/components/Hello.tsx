import { motion } from 'framer-motion';
import styled from 'styled-components';

const Box = styled(motion.div)`
  margin: 50px;
  width: 80px;
  height: 80px;
  background: green;
  border-radius: 20px;
`;

const Hello = () => {
  return (
    <>
      <Box animate={{ scale: 2 }} transition={{ duration: 2, repeat: Infinity }} />
      <Box
        animate={{ x: [0, 200, 0], rotate: 90 }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <Box whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} />
    </>
  );
};

export default Hello;
