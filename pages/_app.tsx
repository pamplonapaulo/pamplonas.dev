import React, { useEffect, useRef } from 'react'
import Nav from 'components/nav'
import Footer from 'components/footer'

import { useRouter } from 'next/router'

import GlobalStyles from 'styles/global'
import styled from 'styled-components'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const pageWrap = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    pageWrap.current?.scrollTo(0, 0)
  }, [router.asPath])

  return (
    <>
      <GlobalStyles />
      <Nav />
      <Main ref={pageWrap}>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </>
  )
}

const Main = styled.main`
  background-image: linear-gradient(#000, #1b1b1b);
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: calc(100% - 83px);
`

export default MyApp
