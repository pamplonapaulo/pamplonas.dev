import Container from 'components/container'
import ImageParticles from 'arts/imageParticles'

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Home.module.css'

const GenerativeArtPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>image particles | pamplonas.dev</title>
        <meta name="description" content="next" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Container justify={'space-around'} maxWidth={'calc(1480px)'}>
        <ImageParticles />
      </Container>
    </div>
  )
}

export default GenerativeArtPage
