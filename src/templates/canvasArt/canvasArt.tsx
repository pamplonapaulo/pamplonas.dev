import Container from 'components/container'
import CanvasArt from 'components/canvas-art'

const CanvasArtTemplate = () => {
  return (
    <Container
      justify={'space-around'}
      maxWidth={'calc(1480px - 2rem)'}
      // bgColor={'#efd81f'}
    >
      <CanvasArt />
    </Container>
  )
}

export default CanvasArtTemplate
