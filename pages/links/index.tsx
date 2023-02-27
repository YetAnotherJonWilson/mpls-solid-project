import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Links() {
  return (
    <>
      <Head>
        <title>Links</title>
      </Head>
      <h1>Links</h1>
      <Link href="https://www.meetup.com/minneapolis-solid-project/">
        Meetup Group
      </Link>
      <br />
      <Link href="/">Back to Home</Link>
    </>
  );
}
