import type { NextPage } from 'next'
import Head from 'next/head'
import SketchTemplate from 'templates/sketch'
import styles from 'styles/Home.module.css'

const HomePage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>pamplonas.dev</title>
        <meta name="description" content="Frontend Web Development" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <SketchTemplate />
    </div>
  )
}

export default HomePage
