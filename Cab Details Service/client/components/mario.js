
import Image from 'next/image'
import styles from '../styles/Mario.module.css'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Mario = () => {

  const router = useRouter();
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    if (!user) {
      console.log('redirecting');
      // router.push('http://localhost:3001/'); // Redirect to container app if not logged in
    }
  }, []);

  return (
    <main className={styles.main}>
      <Image
        src="https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png"
        alt="Mario"
        width={240}
        height={413}
      />
      <h1 className={styles.title}>
        G'day! I'm Mario, a microfrontend.
      </h1>
      <span>I'm hosted at <a target="_blank" href="https://mf-micro-front-end-activate.vercel.app">https://mf-micro-front-end-activate.vercel.app</a></span>
    </main>
  )
}

export default Mario
