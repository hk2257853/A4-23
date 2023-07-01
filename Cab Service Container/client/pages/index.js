import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Microfrontends Demo</title>
        <meta name="description" content="Demo for Microfrontends using Module Federation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <div className="container mx-auto p-4">
      <h1 className="mt-10 text-3xl font-bold mb-4">Welcome to the Container App</h1> {/* TODO: inplace of mt-10 here put in global css */}

    </div>
      </main>
    </div>
  )
}
