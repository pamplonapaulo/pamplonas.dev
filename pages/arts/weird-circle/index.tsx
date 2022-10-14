import Container from 'components/container'
import WeirdCircle from 'arts/weirdCircle'

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Home.module.css'

const GenerativeArtPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>weird circle | pamplonas.dev</title>
        <meta name="description" content="weird circle" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Container justify={'space-around'} maxWidth={'calc(1480px - 2rem)'}>
        <WeirdCircle />
      </Container>
    </div>
  )
}

export default GenerativeArtPage
