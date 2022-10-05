import Container from 'components/container'
import { useRouter } from 'next/router'
import * as S from './styles'

const GenerativeTemplate = () => {
  const router = useRouter()

  return (
    <>
      <Container
        alignItems={'baseline'}
        justify={'start'}
        direction={'column'}
        maxWidth={'1480px'}
      >
        <S.Section>
          <S.Title>generative art</S.Title>

          <S.Article
            onClick={() => router.push({ pathname: '/arts/one' }, '/arts/one')}
          >
            <S.Headline>One</S.Headline>
            <S.Headline>09/31/2022</S.Headline>

            <S.Descr>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              laborum voluptatum placeat impedit soluta quaerat exercitationem.
              Totam, harum, temporibus suscipit voluptate ut quia consequatur
              facere tempore ad eius laudantium illum.
            </S.Descr>
          </S.Article>

          <S.Article
            onClick={() => router.push({ pathname: '/arts/two' }, '/arts/two')}
          >
            <S.Headline>Two</S.Headline>
            <S.Headline>09/31/2022</S.Headline>

            <S.Descr>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              laborum voluptatum placeat impedit soluta quaerat exercitationem.
              Totam, harum, temporibus suscipit voluptate ut quia consequatur
              facere tempore ad eius laudantium illum.
            </S.Descr>
          </S.Article>
        </S.Section>
      </Container>
    </>
  )
}

export default GenerativeTemplate
