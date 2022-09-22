import Container from 'components/container'
import Logo from 'components/logo'
import MenuIcon from 'components/menu-icon'

import * as S from './styles'

const Nav = () => {
  return (
    <S.Nav>
      <Container justify={'space-between'} isHeader={true} maxWidth={'1480px'}>
        <Logo />
        <MenuIcon />
      </Container>
    </S.Nav>
  )
}

export default Nav
