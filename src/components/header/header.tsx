import Container from 'components/container'
import Logo from 'components/logo'
import MenuIcon from 'components/menu-icon'

import * as S from './styles'

const Headder = () => {
  return (
    <S.Headder>
      <Container justify={'space-between'} isHeader={true} maxWidth={'1480px'}>
        <Logo />
        <MenuIcon />
      </Container>
    </S.Headder>
  )
}

export default Headder
