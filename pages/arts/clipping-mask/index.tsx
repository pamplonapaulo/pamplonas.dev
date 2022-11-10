import Container from 'components/container'
import ClippingMask from 'arts/clippingMask'

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Home.module.css'

const GenerativeArtPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>clipping mask | pamplonas.dev</title>
        <meta name="description" content="clipping mask" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Container justify={'space-around'} maxWidth={'calc(1480px)'}>
        <ClippingMask />
      </Container>
    </div>
  )
}

export default GenerativeArtPage
