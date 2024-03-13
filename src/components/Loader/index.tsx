import { ClockLoader } from 'react-spinners'
import { Container } from './styles'
import { cores } from '../../styles'

const Loader = () => (
  <Container>
    <ClockLoader color={cores.salmao} />
  </Container>
)

export default Loader
