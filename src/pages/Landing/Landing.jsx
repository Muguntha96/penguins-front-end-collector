import PenguinLogo from '../../assets/animations/penguins.jpg'
import { useRive } from '@rive-app/react-canvas'

const Landing = () => {
  // Rive
  const { RiveComponent } = useRive({
    src: PenguinLogo,
    autoplay: true,
    stateMachines: "State Machine 1",
  })

  return (
    <main>
      <RiveComponent />
      <h1>REACT PENGUINS</h1>
    </main>
  )
}

export default Landing