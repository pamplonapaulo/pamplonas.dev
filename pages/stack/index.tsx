import type { NextPage } from 'next'
import Head from 'next/head'
import SketchTemplate from 'templates/sketch'
import styles from 'styles/Home.module.css'

const StackPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stack | pamplonas.dev</title>
        <meta name="description" content="Stack" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <SketchTemplate />
    </div>
  )
}

export default StackPage
