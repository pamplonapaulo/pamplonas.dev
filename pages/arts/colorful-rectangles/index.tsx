import Container from 'components/container'
<<<<<<< HEAD
import ColorfulRectangles from 'arts/colorfulRectangles'
=======
import ClippingMask from 'arts/clippingMask'
>>>>>>> main

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Home.module.css'

const GenerativeArtPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
<<<<<<< HEAD
        <title>colorful rectangles | pamplonas.dev</title>
        <meta name="description" content="colorful rectangles" />
=======
        <title>clipping mask | pamplonas.dev</title>
        <meta name="description" content="clipping mask" />
>>>>>>> main
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Container justify={'space-around'} maxWidth={'calc(1480px)'}>
<<<<<<< HEAD
        <ColorfulRectangles />
=======
        <ClippingMask />
>>>>>>> main
      </Container>
    </div>
  )
}

export default GenerativeArtPage