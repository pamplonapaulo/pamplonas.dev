// import { useState } from 'react'
import * as S from './styles'

import { useMenu } from 'contexts'

const Nav = () => {
  const { menu } = useMenu()

  return (
    <S.Nav isVisible={menu}>
      <S.Item>About</S.Item>
      <S.Item>Portifolio</S.Item>
      <S.Item>Stack</S.Item>
      <S.Item>Resume</S.Item>
      <S.Item>Articles</S.Item>
      <S.Item>Generative Art</S.Item>
      <S.Item>Contact</S.Item>
    </S.Nav>
  )
}

export default Nav
