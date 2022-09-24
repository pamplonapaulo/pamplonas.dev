import * as S from './styles'

import { useMenu } from 'contexts'

const MenuIcon = () => {
  const { menu, setMenu } = useMenu()

  return (
    <S.Wrap isClicked={menu} onClick={() => setMenu(!menu)}>
      <S.Dot />
      <S.Dot />
      <S.Dot />
    </S.Wrap>
  )
}

export default MenuIcon
