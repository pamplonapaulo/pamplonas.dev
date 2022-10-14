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

          <S.Article onClick={() => handleClick('/arts/three')}>
            <S.Headline>three: bubbles</S.Headline>
            <S.Headline>10/14/2022</S.Headline>
            <S.Descr>
              Third exercise using Canvas tag and first one using
              requestAnimationFrame().
            </S.Descr>
          </S.Article>

          <S.Article onClick={() => handleClick('/arts/two')}>
            <S.Headline>two: artistic circle</S.Headline>
            <S.Headline>09/31/2022</S.Headline>
            <S.Descr>
              Second exercise with creative forms. Single color irregular
              circumference.
            </S.Descr>
          </S.Article>

          <S.Article onClick={() => handleClick('/arts/one')}>
            <S.Headline>one: micro tiles</S.Headline>
            <S.Headline>09/15/2022</S.Headline>
            <S.Descr>
              Very first generative forms with Canvas, displaying random little
              colored squares. First leasson of creative coding classes.
            </S.Descr>
          </S.Article>
        </S.Section>
      </Container>
    </>
  )
}

export default GenerativeTemplate
