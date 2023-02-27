import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Slides() {
  return (
    <>
      <Head>
        <title>Presentations</title>
      </Head>
      <h1>Presentations</h1>
      <h2>Coming Soon</h2>
      <Link href="/">Back to Home</Link>
    </>
  );
}
