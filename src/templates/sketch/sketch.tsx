import Container from 'components/container'
import Sketch from 'components/sketch'
import * as S from './styles'

const SketchTemplate = () => {
  return (
    <>
      {/* <S.Main> */}
      <Container justify={'space-around'} maxWidth={'1480px'}>
        <Sketch />
      </Container>
      {/* </S.Main> */}
    </>
  )
}

export default SketchTemplate
