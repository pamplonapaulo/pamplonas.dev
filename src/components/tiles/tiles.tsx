import * as S from './styles'

const Tiles = () => {
  const arr = []

  for (let i = 0; i < 798; i++) {
    arr.push('')
  }

  return (
    <>
      {arr.map((c: string, i: number) => (
        <S.Tile key={i} />
      ))}
    </>
  )
}

export default Tiles
