import { useRouter } from 'next/router'
import * as S from './styles'

import { useMenu } from 'contexts'

const Nav = () => {
  const { menu, setMenu } = useMenu()
  const router = useRouter()

  const handleClick = (path: string) => {
    router.push({ pathname: path }, path)
    setMenu(false)
  }

  return (
    <S.Nav isVisible={menu}>
      <S.Item
        isCurrent={window.location.pathname === '/'}
        onClick={() => handleClick('/')}
      >
        Home
      </S.Item>
      <S.Item
        isCurrent={window.location.pathname === '/about'}
        onClick={() => handleClick('/about')}
      >
        About
      </S.Item>
      <S.Item
        isCurrent={window.location.pathname === '/portfolio'}
        onClick={() => handleClick('/portfolio')}
      >
        Portfolio
      </S.Item>
      <S.Item
        isCurrent={window.location.pathname === '/stack'}
        onClick={() => handleClick('/stack')}
      >
        Stack
      </S.Item>
      <S.Item
        isCurrent={window.location.pathname === '/resume'}
        onClick={() => handleClick('/resume')}
      >
        Resume
      </S.Item>
      <S.Item
        isCurrent={window.location.pathname === '/articles'}
        onClick={() => handleClick('/articles')}
      >
        Articles
      </S.Item>
      <S.Item
        isCurrent={window.location.pathname === '/generative'}
        onClick={() => handleClick('/generative')}
      >
        Generative Art
      </S.Item>
      <S.Item
        isCurrent={window.location.pathname === '/contact'}
        onClick={() => handleClick('/contact')}
      >
        Contact
      </S.Item>
    </S.Nav>
  )
}

export default Nav
