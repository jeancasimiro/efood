import { ClockLoader } from 'react-spinners'
import { cores } from '../../styles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <ClockLoader color={cores.salmao} />
  </Container>
)

export default Loader
