import Container from 'components/container'
// import Canvas from 'components/canvas'
import * as S from './styles'

const AboutTemplate = () => {
  return (
    <>
      <Container
        alignItems={'baseline'}
        justify={'start'}
        direction={'column'}
        maxWidth={'1480px'}
        // bgColor={'red'}
      >
        <S.Section>
          <S.Title>about</S.Title>

          <S.Article>
            <S.Descr>
              I&apos;ve been learning web development oficially since September
              2016, when I enrolled in a certification program in San Diego,
              Californina, investing 720 hours during 2 semesters.
            </S.Descr>
            <S.Descr>
              Before this I spent 11 years in a very different field, working
              mostly with Public Relations but ending close to a dev team, which
              was supervised by me as their client when I worked in a big
              Brazilian company today owned by Kantar Group.
            </S.Descr>
            <S.Descr>
              The biggest challenge of starting a second career after such great
              achievements gotten previously is to have a quiet high standard
              and critical perspective of delivering services professionaly, in
              other words how to get a good balance between a senior mind and
              junior hard skills.
            </S.Descr>
            <S.Descr>
              Having more or less 2 years in paid positions as a web developer,
              I&apos;m starting to feel more mature and way less insecure, not
              afraid of diving in new technologies as my needs request - or just
              for fun.
            </S.Descr>
            <S.Descr>
              As a super committed professional, attentive to deadlines, it took
              me a while to feel confident to accept challenges to do things
              that I never did before. It doesn&apos;t scare me anymore, but
              actually that&apos;s what motivates me most.
            </S.Descr>
          </S.Article>
        </S.Section>
      </Container>
    </>
  )
}

export default AboutTemplate
