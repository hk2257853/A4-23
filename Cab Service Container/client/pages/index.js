import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {

  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user);    
  }, []);
  
  const handleLogin = () => {
    // Simulating authentication
    const fakeUser = {
      username: 'john',
      token: 'fake-token',
    };

    localStorage.setItem('user', JSON.stringify(fakeUser));
    console.log(localStorage.getItem('user'));
    setUser(fakeUser);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    router.push('/');
  };


  return (
    <div>
      <Head>
        <title>Microfrontends Demo</title>
        <meta name="description" content="Demo for Microfrontends using Module Federation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Container App</h1>
      <Link className="text-blue-500 underline mb-2 block" href="http://localhost:3000/">
        Child 1
      </Link>
      <Link className="text-blue-500 underline mb-2 block" href="/child2">
      Child 2
      </Link>

      {user ? (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      ) : (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleLogin}
        >
          Login
        </button>
      )}
    </div>
      </main>
    </div>
  )
}
