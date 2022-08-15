import Container from 'components/container'
import Title from 'components/title'
import Image from 'next/image'

import * as S from './styles'

const Nav = () => {
  return (
    <S.Nav>
      <Container justify={'space-between'} isHeader={true} maxWidth={'1480px'}>
        <Image
          layout={'fixed'}
          src="/pamplona.png"
          alt="Picture of the author"
          width={50}
          height={50}
        />
        <Title />
      </Container>
    </S.Nav>
  )
}

export default Nav