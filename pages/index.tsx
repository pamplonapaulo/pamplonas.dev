import type { NextPage } from 'next'
import Head from 'next/head'
import CanvasArtTemplate from 'templates/canvasArt'
import styles from 'styles/Home.module.css'

const HomePage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>pamplonas.dev</title>
        <meta name="description" content="Frontend Web Development" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <CanvasArtTemplate />
    </div>
  )
}

export default HomePage
