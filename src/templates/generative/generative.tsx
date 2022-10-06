import Container from 'components/container'
import { useRouter } from 'next/router'
import * as S from './styles'

const GenerativeTemplate = () => {
  const router = useRouter()

  const handleClick = (path: string) => {
    router.push({ pathname: path }, path)
  }

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

          <S.Article onClick={() => handleClick('/arts/one')}>
            <S.Headline>One</S.Headline>
            <S.Headline>09/31/2022</S.Headline>

            <S.Descr>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              laborum voluptatum placeat impedit soluta quaerat exercitationem.
              Totam, harum, temporibus suscipit voluptate ut quia consequatur
              facere tempore ad eius laudantium illum.
            </S.Descr>
          </S.Article>

          <S.Article onClick={() => handleClick('/arts/two')}>
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
