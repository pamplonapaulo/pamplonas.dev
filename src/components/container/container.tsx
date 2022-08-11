import * as S from './styles'

type Props = {
  children: React.ReactNode
  justify: string
  bgColor?: string
  isHeader?: boolean
}

const Container = ({ children, justify, bgColor, isHeader }: Props) => {
  return (
    <S.Container justify={justify} bgColor={bgColor} isHeader={isHeader}>
      {children}
    </S.Container>
  )
}

export default Container
