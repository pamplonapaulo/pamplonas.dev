import Container from 'components/container'
import Pamplona from 'arts/pamplona'

import * as S from './styles'

const HomeTemplate = () => {
  return (
    <>
      <Container
        justify={'space-around'}
        direction={'column'}
        maxWidth={'1480px'}
        noPadding={true}
      >
        <Pamplona />
        <S.Descr>full stack web development</S.Descr>
      </Container>
    </>
  )
}

export default HomeTemplate
