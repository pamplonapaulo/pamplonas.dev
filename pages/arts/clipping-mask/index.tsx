import Container from 'components/container'
import ColorfulRectangles from 'arts/colorfulRectangles'

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Home.module.css'

const GenerativeArtPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>colorful rectangles | pamplonas.dev</title>
        <meta name="description" content="colorful rectangles" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Container justify={'space-around'} maxWidth={'calc(1480px)'}>
        <ColorfulRectangles />
      </Container>
    </div>
  )
}

export default GenerativeArtPage
