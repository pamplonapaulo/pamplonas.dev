import { useRouter } from 'next/router'

import * as S from './styles'

import { useMenu } from 'contexts'

const Logo = () => {
  const { setMenu } = useMenu()
  const router = useRouter()

  const handleClick = () => {
    setMenu(false)
    router.push({ pathname: '/' }, '/')
  }

  return (
    <S.Wrap>
      <S.Frame onClick={handleClick}>
        <S.Letter>p</S.Letter>
      </S.Frame>
      <S.Span>amplonas.dev</S.Span>
    </S.Wrap>
  )
}

export default Logo
