import Container from 'components/container'
import Title from 'components/title'
import Logo from 'components/logo'

import * as S from './styles'

const Nav = () => {
  return (
    <S.Nav>
      <Container justify={'start'} isHeader={true} maxWidth={'1480px'}>
        <Logo />
      </Container>
    </S.Nav>
  )
}

export default Nav
