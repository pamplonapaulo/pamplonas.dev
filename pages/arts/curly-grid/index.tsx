import Container from 'components/container'
import CurlyGrid from 'arts/curlyGrid'

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Home.module.css'

const GenerativeArtPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>curly grid | pamplonas.dev</title>
        <meta name="description" content="next" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Container justify={'space-around'} maxWidth={'calc(1480px)'}>
        <CurlyGrid />
      </Container>
    </div>
  )
}

export default GenerativeArtPage
