import Container from 'components/container'
import SkewedRectangle from 'arts/skewedRectangle'

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Home.module.css'

const GenerativeArtPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>skewed rectangles | pamplonas.dev</title>
        <meta name="description" content="skewed rectangles" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Container justify={'space-around'} maxWidth={'calc(1480px)'}>
        <SkewedRectangle />
      </Container>
    </div>
  )
}

export default GenerativeArtPage
