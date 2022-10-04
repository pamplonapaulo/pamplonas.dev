import type { NextPage } from 'next'
import Head from 'next/head'
import ContactTemplate from 'templates/contact'
import styles from 'styles/Home.module.css'

const ContactPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>contact | pamplonas.dev</title>
        <meta name="description" content="Contact" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ContactTemplate />
    </div>
  )
}

export default ContactPage
