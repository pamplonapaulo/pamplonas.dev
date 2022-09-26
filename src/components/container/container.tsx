import * as S from './styles'

type Props = {
  children: React.ReactNode
  alignItems?: string
  direction?: string
  justify: string
  bgColor?: string
  isHeader?: boolean
  maxWidth?: string
}

const Container = ({
  children,
  alignItems,
  direction,
  justify,
  bgColor,
  isHeader,
  maxWidth,
}: Props) => {
  return (
    <S.Container
      alignItems={alignItems}
      justify={justify}
      direction={direction}
      bgColor={bgColor}
      isHeader={isHeader}
      maxWidth={maxWidth}
    >
      {children}
    </S.Container>
  )
}

export default Container
