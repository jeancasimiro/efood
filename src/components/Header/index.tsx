import { Link } from 'react-router-dom'

import { Back, Frase, Logo } from './styles'

import fundo from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'

const Header = () => (
  <Back style={{ backgroundImage: `url(${fundo})` }}>
    <Link to="/">
      <Logo src={logo} alt="Efood" />
    </Link>
    <Frase>Viva experiências gastronômicas no conforto da sua casa</Frase>
  </Back>
)

export default Header
