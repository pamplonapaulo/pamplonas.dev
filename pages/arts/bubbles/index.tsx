import Container from 'components/container'
import WeirdCircle from 'arts/bubbles'

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Home.module.css'

const GenerativeArtPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>bubbles | pamplonas.dev</title>
        <meta name="description" content="bubbles" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Container
        justify={'space-around'}
        maxWidth={'calc(1480px)'}
        // bgColor={'rgba(255,255,0,0.2)'}
      >
        <WeirdCircle />
      </Container>
    </div>
  )
}

export default GenerativeArtPage
