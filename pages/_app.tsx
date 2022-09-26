import React, { useEffect, useRef } from 'react'
import Header from 'components/header'
import Nav from 'components/nav'
import Footer from 'components/footer'

import { useRouter } from 'next/router'

import { MenuProvider } from 'contexts'

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
      <MenuProvider>
        <Header />
        <Main ref={pageWrap}>
          <Nav />
          <Component {...pageProps} />
        </Main>
        <Footer />
      </MenuProvider>
    </>
  )
}

const Main = styled.main`
  //background-image: linear-gradient(#000, #1b1b1b);
  background: #000;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: calc(100% - 83px);
  padding-top: 83px;
  position: relative;
  overflow: hidden;
`

export default MyApp
