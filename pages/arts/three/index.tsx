import Container from 'components/container'
import ArtThree from 'arts/three'

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Home.module.css'

const GenerativeArtPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>art three | pamplonas.dev</title>
        <meta name="description" content="Art One" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Container
        justify={'space-around'}
        maxWidth={'calc(1480px)'}
        // bgColor={'green'}
      >
        <ArtThree />
      </Container>
    </div>
  )
}

export default GenerativeArtPage
