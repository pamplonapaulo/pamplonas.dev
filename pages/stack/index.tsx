import type { NextPage } from 'next'
import Head from 'next/head'
import StackTemplate from 'templates/stack'
import styles from 'styles/Home.module.css'

const StackPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>stack | pamplonas.dev</title>
        <meta name="description" content="Stack" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <StackTemplate />
    </div>
  )
}

export default StackPage
