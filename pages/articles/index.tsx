import ArticlesTemplate from 'templates/articles'

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Home.module.css'

const ArticlesPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>articles | pamplonas.dev</title>
        <meta name="description" content="Resume" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ArticlesTemplate />
    </div>
  )
}

export default ArticlesPage
