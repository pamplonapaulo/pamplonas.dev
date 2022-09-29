import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import * as S from './styles'

import { useMenu } from 'contexts'

const Nav = () => {
  const { menu, setMenu } = useMenu()
  const router = useRouter()
  const [current, setCurrent] = useState('')

  const handleClick = (path: string) => {
    router.push({ pathname: path }, path)
    setMenu(false)
    setCurrent(path)
  }

  useEffect(() => {
    setCurrent(window.location.pathname)
  }, [])

  return (
    <S.Nav isVisible={menu}>
      <S.Item isCurrent={current === '/'} onClick={() => handleClick('/')}>
        Home
      </S.Item>
      <S.Item
        isCurrent={current === '/about'}
        onClick={() => handleClick('/about')}
      >
        About
      </S.Item>
      <S.Item
        isCurrent={current === '/portfolio'}
        onClick={() => handleClick('/portfolio')}
      >
        Portfolio
      </S.Item>
      <S.Item
        isCurrent={current === '/stack'}
        onClick={() => handleClick('/stack')}
      >
        Stack
      </S.Item>
      <S.Item
        isCurrent={current === '/resume'}
        onClick={() => handleClick('/resume')}
      >
        Resume
      </S.Item>
      <S.Item
        isCurrent={current === '/articles'}
        onClick={() => handleClick('/articles')}
      >
        Articles
      </S.Item>
      <S.Item
        isCurrent={current === '/generative'}
        onClick={() => handleClick('/generative')}
      >
        Generative Art
      </S.Item>
      <S.Item
        isCurrent={current === '/contact'}
        onClick={() => handleClick('/contact')}
      >
        Contact
      </S.Item>
    </S.Nav>
  )
}

export default Nav
