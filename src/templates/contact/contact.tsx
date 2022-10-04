import Container from 'components/container'
// import Canvas from 'components/canvas'
import * as S from './styles'

import Image from 'next/image'

import github from '../../../public/social/github.svg'
import linkedin from '../../../public/social/linkedin.svg'
import codepen from '../../../public/social/codepen.svg'
import whatsapp from '../../../public/social/whatsapp.png'

const ContactTemplate = () => {
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
          <S.Title>contact</S.Title>

          <S.Article>
            <S.Row>
              <S.Item>
                <S.ImgWrap>
                  <Image src={github} alt="github" />
                </S.ImgWrap>
              </S.Item>
              <S.Anchor target="blank" href="https://github.com/pamplonapaulo">
                <S.Descr>github.com/pamplonapaulo</S.Descr>
              </S.Anchor>
            </S.Row>
            <S.Row>
              <S.Item>
                <S.ImgWrap>
                  <Image src={linkedin} alt="linkedin" />
                </S.ImgWrap>
              </S.Item>
              <S.Anchor
                target="blank"
                href="https://linkedin.com/in/paulopamplona"
              >
                <S.Descr>linkedin.com/in/paulopamplona</S.Descr>
              </S.Anchor>
            </S.Row>
            <S.Row>
              <S.Item>
                <S.ImgWrap>
                  <Image src={codepen} alt="codepen" />
                </S.ImgWrap>
              </S.Item>
              <S.Anchor target="blank" href="https://codepen.io/pamplonapaulo">
                <S.Descr>codepen.io/pamplonapaulo</S.Descr>
              </S.Anchor>
            </S.Row>
            <S.Row>
              <S.Item>
                <S.ImgWrap>
                  <Image src={whatsapp} alt="whatsapp" />
                </S.ImgWrap>
              </S.Item>
              <S.Anchor
                target="blank"
                href="https://api.whatsapp.com/send?phone=5521995366383"
              >
                <S.Descr>whatsapp</S.Descr>
              </S.Anchor>
            </S.Row>
          </S.Article>
        </S.Section>
      </Container>
    </>
  )
}

export default ContactTemplate
