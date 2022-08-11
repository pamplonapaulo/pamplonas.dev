import Container from 'components/container'
import Canvas from 'components/canvas'

const PlaygroundTemplate = () => {
  return (
    <>
      <Container justify={'space-around'} bgColor={'#000'}>
        <Canvas />
      </Container>
    </>
  )
}

export default PlaygroundTemplate
