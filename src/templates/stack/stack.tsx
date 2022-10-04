import Container from 'components/container'
// import Canvas from 'components/canvas'
import * as S from './styles'
import Image from 'next/image'

import logo_js from '../../../public/stack/javascript.png'
import logo_ts from '../../../public/stack/typescript.png'
import logo_graphql from '../../../public/stack/graphQL.png'
import logo_react from '../../../public/stack/reactjs.png'
import logo_stripe from '../../../public/stack/stripe.png'
import logo_strapi from '../../../public/stack/strapi.png'
import logo_next from '../../../public/stack/nextjs.png'
import logo_node from '../../../public/stack/node.png'
import logo_styled from '../../../public/stack/styled-components.png'

const StackTemplate = () => {
  return (
    <>
      <Container
        alignItems={'baseline'}
        justify={'start'}
        direction={'column'}
        maxWidth={'1480px'}
      >
        <S.Section>
          <S.Title>stack</S.Title>

          <S.Article>
            <S.Row>
              <S.Item>
                <S.ImgWrap>
                  <Image src={logo_js} alt="javascript" />
                </S.ImgWrap>
                <S.Descr>javascript</S.Descr>
              </S.Item>

              <S.Item>
                <S.ImgWrap>
                  <Image src={logo_ts} alt="typescript" />
                </S.ImgWrap>
                <S.Descr>typescript</S.Descr>
              </S.Item>
              <S.Item>
                <S.ImgWrap>
                  <Image src={logo_react} alt="reactjs" />
                </S.ImgWrap>
                <S.Descr>reactjs</S.Descr>
              </S.Item>
            </S.Row>
            <S.Row>
              <S.Item>
                <S.ImgWrap>
                  <Image src={logo_next} alt="nextjs" />
                </S.ImgWrap>
                <S.Descr>nextjs</S.Descr>
              </S.Item>
              <S.Item>
                <S.ImgWrap>
                  <Image src={logo_styled} alt="styled-components" />
                </S.ImgWrap>
                <S.Descr>styled-components</S.Descr>
              </S.Item>

              <S.Item>
                <S.ImgWrap>
                  <Image src={logo_graphql} alt="graphQL" />
                </S.ImgWrap>
                <S.Descr>graphQL</S.Descr>
              </S.Item>
            </S.Row>

            <S.Row>
              <S.Item>
                <S.ImgWrap>
                  <Image src={logo_strapi} alt="strapi" />
                </S.ImgWrap>
                <S.Descr>strapi</S.Descr>
              </S.Item>

              <S.Item>
                <S.ImgWrap>
                  <Image src={logo_node} alt="nodejs" />
                </S.ImgWrap>
                <S.Descr>nodejs</S.Descr>
              </S.Item>

              <S.Item>
                <S.ImgWrap>
                  <Image src={logo_stripe} alt="stripe" />
                </S.ImgWrap>
                <S.Descr>stripe</S.Descr>
              </S.Item>
            </S.Row>
          </S.Article>
        </S.Section>
      </Container>
    </>
  )
}

export default StackTemplate
