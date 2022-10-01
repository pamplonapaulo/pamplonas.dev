import ResumeTemplate from 'templates/resume'

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Home.module.css'

const ResumePage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Resume | pamplonas.dev</title>
        <meta name="description" content="Resume" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ResumeTemplate />
    </div>
  )
}

export default ResumePage
