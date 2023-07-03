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
        <div className="pt-20 container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Landing pg here</h1>
        </div>
      </main>
    </div>
  )
}
