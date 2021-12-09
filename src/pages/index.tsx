import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Hello from '~/components/Hello';
import Variants from '~/components/Variants';

const Home = () => {
  return (
    <>
      <Hello />
      <Variants />
    </>
  );
};

export default Home;
