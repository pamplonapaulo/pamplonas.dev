import GenerativeTemplate from 'templates/generative'

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Home.module.css'

const GenerativeArtPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>generative art | pamplonas.dev</title>
        <meta name="description" content="Generative Art" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <GenerativeTemplate />
    </div>
  )
}

export default GenerativeArtPage
