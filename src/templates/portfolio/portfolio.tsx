import Container from 'components/container'
import * as S from './styles'

import Image from 'next/image'

import github from '../../../public/social/github.svg'
import website from '../../../public/social/website.svg'

const PortfolioTemplate = () => {
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
          <S.Title>portfolio</S.Title>

          <S.Article>
            <S.Headline>Gorilla Pack Snacks | E-commerce</S.Headline>
            <S.Headline>06/2022</S.Headline>

            <S.Descr>
              Reactjs | Nextjs | Javascript | Nodejs | Strapi | Stripe | GraphQL
              | Heroku | Vercel | Styled-components
            </S.Descr>
            <S.Row>
              <S.Anchor
                target="blank"
                href="https://gorilla.vercel.app/"
                title="visit website"
              >
                <Image src={website} alt="website" />
              </S.Anchor>
              <S.Anchor
                target="blank"
                href="https://github.com/pamplonapaulo/gorilla-nextjs"
                title="visit github frontend"
              >
                <Image src={github} alt="github frontend" />
              </S.Anchor>
              <S.Anchor
                target="blank"
                href="https://github.com/pamplonapaulo/gorillapack-backend"
                title="visit github backend"
              >
                <Image src={github} alt="github backend" />
              </S.Anchor>
            </S.Row>
          </S.Article>

          <S.Article>
            <S.Headline>Automated Gym Solutions | Institutional</S.Headline>
            <S.Headline>12/2019</S.Headline>

            <S.Descr>Javascript | CSS | Bootstrap | HTML</S.Descr>
            <S.Row>
              <S.Anchor
                target="blank"
                href="https://automatedgymsolutions.com/"
                title="visit website"
              >
                <Image src={website} alt="website" />
              </S.Anchor>
              <S.Anchor
                target="blank"
                href="https://github.com/pamplonapaulo/automatedgymsolutions.com"
                title="visit github frontend"
              >
                <Image src={github} alt="github frontend" />
              </S.Anchor>
            </S.Row>
          </S.Article>

          <S.Article>
            <S.Headline>Heloisa Watercolor | Portfolio</S.Headline>
            <S.Headline>11/2019</S.Headline>

            <S.Descr>PHP | Javascript | SCSS | Digital Ocean</S.Descr>
            <S.Row>
              <S.Anchor
                target="blank"
                href="https://heloisa.art/"
                title="visit website"
              >
                <Image src={website} alt="website" />
              </S.Anchor>
              <S.Anchor
                target="blank"
                href="https://github.com/pamplonapaulo/heloisa.art"
                title="visit frontend and backend repository"
              >
                <Image src={github} alt="github frontend" />
              </S.Anchor>
            </S.Row>
          </S.Article>

          <S.Article>
            <S.Headline>Ginger Research | Institutional</S.Headline>
            <S.Headline>01/2019</S.Headline>

            <S.Descr>Javascript | CSS | Bootstrap | HTML</S.Descr>
            <S.Row>
              <S.Anchor
                target="blank"
                href="https://ginger.com.br/"
                title="visit website"
              >
                <Image src={website} alt="website" />
              </S.Anchor>
              <S.Anchor
                target="blank"
                href="https://github.com/pamplonapaulo/ginger.com.br"
                title="visit github frontend"
              >
                <Image src={github} alt="github frontend" />
              </S.Anchor>
            </S.Row>
          </S.Article>
        </S.Section>
      </Container>
    </>
  )
}

export default PortfolioTemplate
