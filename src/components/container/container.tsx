import * as S from './styles'
import { useMenu } from 'contexts'

type Props = {
  children: React.ReactNode
  alignItems?: string
  direction?: string
  justify: string
  bgColor?: string
  isHeader?: boolean
  maxWidth?: string
  hideMenu?: boolean
  noPadding?: boolean
}

const Container = ({
  children,
  alignItems,
  direction,
  justify,
  bgColor,
  isHeader,
  maxWidth,
  hideMenu = true,
  noPadding = false,
}: Props) => {
  const { setMenu } = useMenu()

  return (
    <S.Container
      alignItems={alignItems}
      justify={justify}
      direction={direction}
      bgColor={bgColor}
      isHeader={isHeader}
      maxWidth={maxWidth}
      noPadding={noPadding}
      onClick={hideMenu ? () => setMenu(false) : undefined}
    >
      {children}
    </S.Container>
  )
}

export default Container
