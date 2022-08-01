import * as S from './styles'

const Tiles = () => {
  //return <S.H>Pamplona&apos;s Development</S.H>

  const words = ["Pamplona's", 'Development']
  const content = 'Development'

  const characters = content.split('')

  const spliteds = []

  for (let i = 0; i < words.length; i++) {
    let word = words[i].split('')
    spliteds.push(word)
  }

  console.log(spliteds)

  return (
    <S.Container>
      {spliteds.map((w: string[], i: number) => (
        <S.Word key={i}>
          {w.map((c: string, i: number) => (
            <S.Tile key={i}>
              <S.Char>{c}</S.Char>
            </S.Tile>
          ))}
        </S.Word>
      ))}
    </S.Container>
  )
}

export default Tiles
