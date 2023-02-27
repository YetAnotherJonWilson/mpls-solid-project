import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function Apps() {
  return (
    <Layout>
      <Head>
        <title>Apps</title>
      </Head>
      <h1>Apps</h1>
      <h2>Coming soon</h2>
      <Link href="/">Back to Home</Link>
    </Layout>
  );
}
