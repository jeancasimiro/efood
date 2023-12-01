import {
  CartContainer,
  Overlay,
  CartBotao,
  BarraLateral,
  TextoValor,
  Valor,
  ContainerValor,
  ItemCart
} from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { ItemCardapio } from '../../pages/Home'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const precoTotal = () => {
    const total = items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
    return total.toFixed(2)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart}></Overlay>
      <BarraLateral>
        <ul>
          {items.map((item: ItemCardapio) => (
            <ItemCart key={item.id}>
              <img src={item.foto} />
              <div>
                <h3>{item.nome}</h3>
                <h4>R$ {item.preco}0</h4>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </ItemCart>
          ))}
        </ul>
        <ContainerValor>
          <TextoValor>Valor total</TextoValor>
          <Valor>R$ {precoTotal()}</Valor>
        </ContainerValor>
        <CartBotao>Continuar com a entrega</CartBotao>
      </BarraLateral>
    </CartContainer>
  )
}

export default Cart
