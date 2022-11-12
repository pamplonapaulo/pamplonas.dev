import Container from 'components/container'
import Heart from 'arts/heart'

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Home.module.css'

const GenerativeArtPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>heart | pamplonas.dev</title>
        <meta name="description" content="heart" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Container justify={'space-around'} maxWidth={'calc(1480px)'}>
        <Heart />
      </Container>
    </div>
  )
}

export default GenerativeArtPage
