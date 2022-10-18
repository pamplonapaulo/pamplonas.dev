import Container from 'components/container'
import Gui from 'arts/gui'

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Home.module.css'

const GenerativeArtPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>graphical user interface(GUI) | pamplonas.dev</title>
        <meta name="description" content="graphical user interface(GUI)" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Container justify={'space-around'} maxWidth={'calc(1480px)'}>
        <Gui />
      </Container>
    </div>
  )
}

export default GenerativeArtPage
