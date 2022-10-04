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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos aliquam fugiat magnam quod, ex earum est, doloribus
              cupiditate ratione incidunt tenetur? Quod cum voluptatum
              accusantium saepe fuga cupiditate incidunt excepturi?
            </S.Descr>
            <S.Descr>
              Blanditiis enim laborum optio dolor. Quae beatae natus nihil culpa
              eligendi harum adipisci suscipit sint aut soluta ut minima non
              quas, eveniet deleniti reiciendis repudiandae earum modi, maiores
              qui optio!
            </S.Descr>
            <S.Descr>
              Unde quibusdam reiciendis ullam explicabo quam ut sapiente
              voluptate dolore commodi, iusto a cupiditate rem, praesentium enim
              accusamus provident porro dicta nesciunt facilis sit molestiae?
              Optio perferendis illum maxime suscipit?
            </S.Descr>
            <S.Descr>
              Nostrum quia a, officia, unde corrupti possimus mollitia quod
              consectetur modi nam placeat dolorum saepe vero, assumenda
              voluptate dolorem! Eligendi voluptatem neque, minus deleniti
              officia aliquam temporibus aperiam molestiae fugiat.
            </S.Descr>
            <S.Descr>
              Facilis asperiores fugiat laudantium sunt saepe, nemo rerum iusto,
              omnis maiores temporibus error autem nulla doloribus delectus eos
              vitae perferendis nesciunt modi sapiente, fugit soluta quia sit.
              Possimus, recusandae animi.
            </S.Descr>
          </S.Article>
        </S.Section>
      </Container>
    </>
  )
}

export default AboutTemplate
