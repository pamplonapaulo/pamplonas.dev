import Container from 'components/container'
import Lettering from 'arts/lettering'

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Home.module.css'

const GenerativeArtPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lettering | pamplonas.dev</title>
        <meta name="description" content="Lettering" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Container justify={'space-around'} maxWidth={'calc(1480px)'}>
        <Lettering />
      </Container>
    </div>
  )
}

export default GenerativeArtPage
