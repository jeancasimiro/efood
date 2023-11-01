import { Link } from 'react-router-dom'

import { Back, Logo, Restaurantes, Carrinho } from './styles'

import fundo from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'

const HeaderSec = () => (
  <Back style={{ backgroundImage: `url(${fundo})` }}>
    <Restaurantes href="/">Restaurantes</Restaurantes>
    <Link to="/">
      <Logo src={logo} alt="Efood" />
    </Link>
    <Carrinho>0 produtos(s) no carrinho</Carrinho>
  </Back>
)

export default HeaderSec
