import Image from 'next/image'
import Tiles from 'components/tiles'
import * as S from './styles'

const HomeTemplate = () => {
  return (
    <>
      <S.Main>
        <Image
          src="/pamplona.png"
          alt="Picture of the author"
          width={175}
          height={175}
        />
        <Tiles />
      </S.Main>
    </>
  )
}

export default HomeTemplate
