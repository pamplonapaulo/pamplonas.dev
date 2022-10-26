import Container from 'components/container'
import Pamplona from 'arts/pamplona'

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Home.module.css'

const GenerativeArtPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lettering second | pamplonas.dev</title>
        <meta name="description" content="Lettering" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Container justify={'space-around'} maxWidth={'calc(1480px)'}>
        <Pamplona />
      </Container>
    </div>
  )
}

export default GenerativeArtPage
