import Container from 'components/container'
import Grid from 'arts/grid'

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Home.module.css'

const GenerativeArtPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>grid | pamplonas.dev</title>
        <meta name="description" content="grid" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Container justify={'space-around'} maxWidth={'calc(1480px)'}>
        <Grid />
      </Container>
    </div>
  )
}

export default GenerativeArtPage
