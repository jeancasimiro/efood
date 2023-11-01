import { Link } from 'react-router-dom'

import { Frase, Back, Logo } from './styles'

import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/Vector.png'

const Header = () => (
  <Back style={{ backgroundImage: `url(${fundo})` }}>
    <Link to="/">
      <Logo src={logo} alt="Efood" />
    </Link>
    <Frase>Viva experiências gastronômicas no conforto da sua casa</Frase>
  </Back>
)

export default Header
