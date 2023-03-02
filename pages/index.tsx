import Head from 'next/head';
import Layout from '../components/layout/layout';
import Navbar from '../components/navbar';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title></title>
      </Head>
      <Navbar />
    </Layout>
  );
}
