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

          <S.Article onClick={() => handleClick('/arts/skewed-rectangles')}>
            <S.Headline>nine: skewed rectangles</S.Headline>
            <S.Headline>11/08/2022</S.Headline>
            <S.Descr>
              Let me tell you how much a shitty dev I&lsquo;m: I&lsquo;m that
              kind of dev who studies cool things but don&lsquo;t feel confident
              enough yet to share who is teaching me these things. So just
              please be aware that none of these arts were concepted by me.
              Yeah, I&lsquo;m not such code stealer neither, pretending to be a
              badass. This is creative coding provided in paid classes.
              I&lsquo;ll let you know once I code something original.
            </S.Descr>
          </S.Article>

          <S.Article onClick={() => handleClick('/arts/lettering')}>
            <S.Headline>eight: lettering</S.Headline>
            <S.Headline>10/24/2022</S.Headline>
            <S.Descr>
              This one was the last exercise from the Creative Coding Part 1
              course. The funniest thing is this practice is that took me more
              or less two days to realise I had a bug from a stupid typo on my
              code. Yup, that damn missing comma! LOL
            </S.Descr>
          </S.Article>

          <S.Article onClick={() => handleClick('/arts/gui')}>
            <S.Headline>seven: Graphical User Interface(GUI)</S.Headline>
            <S.Headline>10/21/2022</S.Headline>
            <S.Descr>
              Now including the Tweakpane, a compact pane library for
              fine-tuning parameters and monitoring value changes. And on this
              one again the biggest challenge was to find out by myself how to
              implement professor&lsquo;s approach in a react project. The
              solution was including the useTweak() hook.
            </S.Descr>
          </S.Article>

          <S.Article onClick={() => handleClick('/arts/animated-noise')}>
            <S.Headline>six: animated noise</S.Headline>
            <S.Headline>10/16/2022</S.Headline>
            <S.Descr>
              Animated noise grid. Since I started this course, my biggest
              challenge is being how to adapt professor&lsquo;s code into a
              react project. On this exercise I had to review the life-cycle of
              react, managing it&lsquo;s hooks with more attention to get the
              proper control of the frames.
            </S.Descr>
          </S.Article>
          <S.Article onClick={() => handleClick('/arts/grid')}>
            <S.Headline>five: grid</S.Headline>
            <S.Headline>10/15/2022</S.Headline>
            <S.Descr>
              Noise grid based on the amazing Perlin Noise&rsquo;s algorithm.
              For this one the only issue faced during the class was how to
              adapt Perlin Noise&lsquo;s library in a project with Typescript.
              But thanks to VS Code features, that was actually surprisingly
              easy.
            </S.Descr>
          </S.Article>
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
