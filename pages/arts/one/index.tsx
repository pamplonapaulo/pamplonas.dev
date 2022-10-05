import Container from 'components/container'
import ArtOne from 'arts/one'

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Home.module.css'

const GenerativeArtPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>art one | pamplonas.dev</title>
        <meta name="description" content="Art One" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Container
        justify={'space-around'}
        maxWidth={'calc(1480px - 2rem)'}
        // bgColor={'#efd81f'}
      >
        <ArtOne />
      </Container>
    </div>
  )
}

export default GenerativeArtPage
