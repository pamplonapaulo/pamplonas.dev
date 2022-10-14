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

          <S.Article onClick={() => handleClick('/arts/connections')}>
            <S.Headline>four: connections</S.Headline>
            <S.Headline>10/14/2022</S.Headline>
            <S.Descr>
              Colored vertices getting connected and disconnected accordingly
              with their distances between each other. Not an authorial code.
            </S.Descr>
          </S.Article>

          <S.Article onClick={() => handleClick('/arts/bubbles')}>
            <S.Headline>three: bubbles</S.Headline>
            <S.Headline>10/13/2022</S.Headline>
            <S.Descr>
              Third exercise using Canvas tag and first one using
              requestAnimationFrame(). Not an authorial code.
            </S.Descr>
          </S.Article>

          <S.Article onClick={() => handleClick('/arts/weird-circle')}>
            <S.Headline>two: weird circle</S.Headline>
            <S.Headline>09/31/2022</S.Headline>
            <S.Descr>
              Second exercise with creative forms. Single color irregular
              circumference. Not an authorial code.
            </S.Descr>
          </S.Article>

          <S.Article onClick={() => handleClick('/arts/micro-tiles')}>
            <S.Headline>one: micro tiles</S.Headline>
            <S.Headline>09/15/2022</S.Headline>
            <S.Descr>
              Very first generative forms with Canvas, displaying random little
              colored squares. First leasson of creative coding classes. Not an
              authorial code.
            </S.Descr>
          </S.Article>
        </S.Section>
      </Container>
    </>
  )
}

export default GenerativeTemplate
