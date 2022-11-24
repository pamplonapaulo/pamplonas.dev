import Container from 'components/container'
import QuadraticCurve from 'arts/quadraticCurve'

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Home.module.css'

const GenerativeArtPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>quadratic curve | pamplonas.dev</title>
        <meta name="description" content="quadratic curve" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Container justify={'space-around'} maxWidth={'calc(1480px)'}>
        <QuadraticCurve />
      </Container>
    </div>
  )
}

export default GenerativeArtPage
