import Head from 'next/head'
import styles from '../styles/Home.module.css'
import UserList from '../components/Userlist/UserList'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cab Details Service</title>
        <meta name="description" content="This is an app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <UserList/>
    </div>
  )
}
