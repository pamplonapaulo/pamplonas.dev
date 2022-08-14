import type { NextPage } from 'next'
import Head from 'next/head'
import SketchTemplate from 'templates/sketch'
import styles from 'styles/Home.module.css'

const SketchPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sketch | pamplonas.dev</title>
        <meta
          name="description"
          content="Canvas sketches using Canvas-Sketch Library"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <SketchTemplate />
    </div>
  )
}

export default SketchPage
