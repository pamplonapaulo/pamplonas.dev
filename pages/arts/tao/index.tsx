import Container from 'components/container'
import Tao from 'arts/tao'

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Home.module.css'

const GenerativeArtPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>tao | pamplonas.dev</title>
        <meta name="description" content="tao" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Container justify={'space-around'} maxWidth={'calc(1480px)'}>
        <Tao />
      </Container>
    </div>
  )
}

export default GenerativeArtPage
