import italianaFundo from '../../assets/images/image2.png'
import { Back, Culinaria, Overlay, Restaurante, Container } from './styles'

const Hero = () => (
  <Back style={{ backgroundImage: `url(${italianaFundo})` }}>
    <Overlay>
      <Container>
        <Culinaria>Italiana</Culinaria>
        <Restaurante>La Dolce Vita Trattoria</Restaurante>
      </Container>
    </Overlay>
  </Back>
)

export default Hero
