import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Back, Carrinho, Container, Logo, Restaurantes } from './styles'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import fundo from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'

const HeaderSec = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <Back style={{ backgroundImage: `url(${fundo})` }}>
      <Container>
        <Restaurantes href="/">Restaurantes</Restaurantes>
        <Link to="/">
          <Logo src={logo} alt="Efood" />
        </Link>
        <Carrinho onClick={openCart}>
          {items.length} produtos(s) no carrinho
        </Carrinho>
      </Container>
    </Back>
  )
}

export default HeaderSec
