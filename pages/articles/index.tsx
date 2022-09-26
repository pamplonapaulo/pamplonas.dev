import PlaygroundTemplate from 'templates/playground'

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Home.module.css'

const ArticlesPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Articles | pamplonas.dev</title>
        <meta name="description" content="Resume" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <PlaygroundTemplate />
    </div>
  )
}

export default ArticlesPage