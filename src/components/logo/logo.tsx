import { useRouter } from 'next/router'

import * as S from './styles'

const Logo = () => {
  const router = useRouter()

  return (
    <S.Wrap>
      <S.Frame onClick={() => router.push({ pathname: '/' }, '/')}>
        <S.Letter>p</S.Letter>
      </S.Frame>
      <S.Span>amplonas.dev</S.Span>
    </S.Wrap>
  )
}

export default Logo
