import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { remove, close } from '../../store/reducers/cart'

import Checkout from '../Checkout'

import {
  BarraLateral,
  CartBotao,
  CartContainer,
  ContainerValor,
  ItemCart,
  Overlay,
  TextoValor,
  Valor
} from './styles'

export const precoTotal = (items: ItemCardapio[]) => {
  const total = items.reduce((acumulador, valorAtual) => {
    return (acumulador += valorAtual.preco)
  }, 0)
  return total.toFixed(2)
}

const Cart = () => {
  const dispatch = useDispatch()

  const [modalAberto, setModalAberto] = useState(false)

  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const cartItems = useSelector((state: RootReducer) => state.cart.items)

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    setModalAberto(true)
  }
  return (
    <>
      <CartContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={closeCart}></Overlay>
        <BarraLateral>
          {items.length > 0 ? (
            <>
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
                <Valor>R$ {precoTotal(items)}</Valor>
              </ContainerValor>
              <CartBotao onClick={goToCheckout} type="button">
                Continuar com a entrega
              </CartBotao>
            </>
          ) : (
            <p className="empty-text">
              O carrinho está vazio, adicione pelo menos um prato para continuar
              com a compra.
            </p>
          )}
        </BarraLateral>
      </CartContainer>
      {modalAberto && (
        <>
          <Checkout
            cartItems={cartItems}
            totalPrice={precoTotal(items)}
            onClose={() => setModalAberto(false)}
          />
        </>
      )}
    </>
  )
}

export default Cart
