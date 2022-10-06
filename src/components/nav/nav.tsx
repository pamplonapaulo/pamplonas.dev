import { useEffect, useState, useLayoutEffect } from 'react'
import { useRouter } from 'next/router'
import * as S from './styles'

import { useMenu } from 'contexts'

const Nav = () => {
  const { menu, setMenu } = useMenu()
  const router = useRouter()
  const [current, setCurrent] = useState('')
  const [subpage, setSubpage] = useState('')

  const pages = [
    '',
    'about',
    'portfolio',
    'stack',
    'resume',
    'articles',
    'generative',
    'contact',
  ]

  const handleClick = (path: string) => {
    if (current !== path) {
      router.push({ pathname: path }, path)
      setMenu(false)
    } else if (current === path && subpage === 'arts') {
      router.push({ pathname: path }, path)
      setMenu(false)
    }
  }

  useEffect(() => {
    const pageGroup = router.pathname.match('/.+/')

    if (pageGroup === null) {
      setCurrent(router.pathname)
      setSubpage('')
    } else {
      setSubpage(pageGroup![0].slice(1, -1))
    }
  }, [router.pathname])

  return (
    <S.Nav isVisible={menu}>
      {pages.map((p: string) => (
        <S.Item
          key={p}
          isSelected={current === '/' + p}
          isClickable={current !== '/' + p || subpage === 'arts'}
          onClick={() => handleClick('/' + p)}
        >
          {p === '' ? 'home' : p}
        </S.Item>
      ))}
    </S.Nav>
  )
}

export default Nav
