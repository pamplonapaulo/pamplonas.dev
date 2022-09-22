import { useState } from 'react'
import * as S from './styles'

const MenuIcon = () => {
  const [menuState, setMenuState] = useState(false)

  return (
    <S.Wrap isClicked={menuState} onClick={() => setMenuState(!menuState)}>
      <S.Dot />
      <S.Dot />
      <S.Dot />
    </S.Wrap>
  )
}

export default MenuIcon
