import Container from 'components/container'
import ArtTwo from 'arts/two'

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Home.module.css'

const GenerativeArtPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>art two | pamplonas.dev</title>
        <meta name="description" content="Art Two" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Container
        justify={'space-around'}
        maxWidth={'calc(1480px - 2rem)'}
        // bgColor={'#efd81f'}
      >
        <ArtTwo />
      </Container>
    </div>
  )
}

export default GenerativeArtPage
