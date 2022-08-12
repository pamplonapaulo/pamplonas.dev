import Container from 'components/container'
import Canvas from 'components/canvas'
import * as S from './styles'

const HomeTemplate = () => {
  return (
    <>
      <S.Main>
        <Container justify={'space-around'} maxWidth={'1480px'}>
          <Canvas />
        </Container>
      </S.Main>
    </>
  )
}

export default HomeTemplate
