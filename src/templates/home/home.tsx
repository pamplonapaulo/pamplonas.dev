import Container from 'components/container'
import * as S from './styles'

const HomeTemplate = () => {
  return (
    <>
      <Container
        alignItems={'baseline'}
        justify={'start'}
        direction={'column'}
        maxWidth={'1480px'}
      >
        <S.Section>
          <S.Article>
            <S.Headline>paulo pamplona</S.Headline>
            <S.Descr>full stack web development</S.Descr>
          </S.Article>
        </S.Section>
      </Container>
    </>
  )
}

export default HomeTemplate
