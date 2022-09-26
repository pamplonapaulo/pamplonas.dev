import AboutTemplate from 'templates/about'

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Home.module.css'

const PlaygroundPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About | pamplonas.dev</title>
        <meta name="description" content="About Paulo Pamplona" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <AboutTemplate />
    </div>
  )
}

export default PlaygroundPage
