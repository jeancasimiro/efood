import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'
import { Logo } from '../Header/styles'
import { Container, Sociais, Icones } from './styles'

const Footer = () => (
  <Container>
    <Logo src={logo} alt="Efood" />
    <Sociais>
      <a href="">
        <Icones src={facebook} alt="Facebook" />
      </a>
      <a href="">
        <Icones src={instagram} alt="Instagram" />
      </a>
      <a href="">
        <Icones src={twitter} alt="Twitter" />
      </a>
    </Sociais>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </p>
  </Container>
)

export default Footer
