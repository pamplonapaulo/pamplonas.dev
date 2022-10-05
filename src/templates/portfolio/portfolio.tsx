import Container from 'components/container'
import * as S from './styles'

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
            <S.Headline>09/31/2022</S.Headline>

            <S.Descr>
              Reactjs | Nextjs | Javascript | Nodejs | Strapi | Stripe | GraphQL
              | Heroku | Vercel | Styled-components
            </S.Descr>
          </S.Article>

          <S.Article>
            <S.Headline>Heloisa Watercolor | Portfolio</S.Headline>
            <S.Headline>09/31/2022</S.Headline>

            <S.Descr>PHP | Javascript | SCSS</S.Descr>
          </S.Article>

          <S.Article>
            <S.Headline>Automated Gym Solutions | Institutional</S.Headline>
            <S.Headline>09/31/2022</S.Headline>

            <S.Descr>Javascript | CSS | HTML</S.Descr>
          </S.Article>

          <S.Article>
            <S.Headline>Ginger Research | Institutional</S.Headline>
            <S.Headline>09/31/2022</S.Headline>

            <S.Descr>Javascript | CSS | HTML</S.Descr>
          </S.Article>
        </S.Section>
      </Container>
    </>
  )
}

export default PortfolioTemplate
