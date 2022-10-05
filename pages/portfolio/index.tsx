import PortfolioTemplate from 'templates/portfolio'

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Home.module.css'

const PortfolioPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>portfolio | pamplonas.dev</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <PortfolioTemplate />
    </div>
  )
}

export default PortfolioPage
