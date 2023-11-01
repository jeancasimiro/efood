import italianaFundo from '../../assets/images/image2.png'
import { Back, Culinaria, Overlay, Restaurante } from './styles'

const Hero = () => (
  <Back style={{ backgroundImage: `url(${italianaFundo})` }}>
    <Overlay>
      <Culinaria>Italiana</Culinaria>
      <Restaurante>La Dolce Vita Trattoria</Restaurante>
    </Overlay>
  </Back>
)

export default Hero
