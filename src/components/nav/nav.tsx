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
      <S.Item onClick={() => handleClick('/')}>Home</S.Item>
      <S.Item onClick={() => handleClick('/about')}>About</S.Item>
      <S.Item onClick={() => handleClick('/portfolio')}>Portfolio</S.Item>
      <S.Item onClick={() => handleClick('/stack')}>Stack</S.Item>
      <S.Item onClick={() => handleClick('/resume')}>Resume</S.Item>
      <S.Item onClick={() => handleClick('/articles')}>Articles</S.Item>
      <S.Item onClick={() => handleClick('/generative')}>Generative Art</S.Item>
      <S.Item onClick={() => handleClick('/contact')}>Contact</S.Item>
    </S.Nav>
  )
}

export default Nav
