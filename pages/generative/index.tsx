import PlaygroundTemplate from 'templates/playground'

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Home.module.css'

const GenerativeArtPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Generative Art | pamplonas.dev</title>
        <meta name="description" content="Generative Art" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <PlaygroundTemplate />
    </div>
  )
}

export default GenerativeArtPage
