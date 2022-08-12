import * as S from './styles'

type Props = {
  children: React.ReactNode
  justify: string
  bgColor?: string
  isHeader?: boolean
  maxWidth?: string
}

const Container = ({
  children,
  justify,
  bgColor,
  isHeader,
  maxWidth,
}: Props) => {
  return (
    <S.Container
      justify={justify}
      bgColor={bgColor}
      isHeader={isHeader}
      maxWidth={maxWidth}
    >
      {children}
    </S.Container>
  )
}

export default Container
