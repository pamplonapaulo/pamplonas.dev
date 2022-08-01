import type { NextPage } from 'next'
import Head from 'next/head'
import HomeTemplate from 'templates/home'
import styles from 'styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pamplona&apos;s Development</title>
        <meta name="description" content="Frontend Web Development" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <HomeTemplate />
    </div>
  )
}

export default Home
