import PlaygroundTemplate from 'templates/playground'

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Home.module.css'

const PlaygroundPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Playground | pamplonas.dev</title>
        <meta
          name="description"
          content="Página dedicada a exercícios e experiências de aprendizado"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <PlaygroundTemplate />
    </div>
  )
}

export default PlaygroundPage
