import Container from 'components/container'
import AnimatedNoise from 'arts/animatedNoise'

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Home.module.css'

const GenerativeArtPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>animated noise | pamplonas.dev</title>
        <meta name="description" content="animated noise" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Container justify={'space-around'} maxWidth={'calc(1480px)'}>
        <AnimatedNoise />
      </Container>
    </div>
  )
}

export default GenerativeArtPage
