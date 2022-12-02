import Container from 'components/container'
import Particles from 'arts/particles'

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Home.module.css'

const GenerativeArtPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>particles | pamplonas.dev</title>
        <meta name="description" content="next" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Container justify={'space-around'} maxWidth={'calc(1480px)'}>
        <Particles />
      </Container>
    </div>
  )
}

export default GenerativeArtPage
