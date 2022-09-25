import type { NextPage } from 'next'
import Head from 'next/head'
import SketchTemplate from 'templates/sketch'
import styles from 'styles/Home.module.css'

const ContactPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact | pamplonas.dev</title>
        <meta name="description" content="Contact" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <SketchTemplate />
    </div>
  )
}

export default ContactPage
