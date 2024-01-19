import {
  CartContainer,
  Overlay,
  BarraLateral,
  CartBotao,
  TextosFinais
} from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

import Cart from '../Cart/index'
import Entrega from '../Entrega'
import Pagamento from '../Pagamento'

import { useForm } from '../../hooks/useForm'
import { PurchasePayload, usePurchaseMutation } from '../../services/api'
import { useState } from 'react'

const Checkout = () => {
  const cartItems = useSelector((state: RootReducer) => state.cart.items)

  const [orderId, setOrderId] = useState(null)

  const [checkoutData, setCheckoutData] = useState<PurchasePayload>({
    products: cartItems.map((item) => ({ id: item.id, price: item.preco })),
    payment: {
      card: {
        name: '',
        number: '',
        code: 0,
        expires: {
          month: 0,
          year: 0
        }
      }
    },
    delivery: {
      receiver: '',
      adress: {
        descripiton: '',
        city: '',
        zipCode: '',
        number: 0,
        complement: ''
      }
    }
  })

  const formComponents = [
    <Cart key="cart" />,
    <Entrega key="entrega" />,
    <Pagamento key="pagamento" />
  ]

  const {
    currentStep,
    currentComponent,
    changeStep,
    isLastStep,
    isFirstStep,
    isSecondStep,
    isOrderComplete,
    setOrderComplete
  } = useForm(formComponents)

  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const [purchase, { data, isLoading, isError }] = usePurchaseMutation()

  const handleCheckout = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isLastStep) {
      try {
        const result = await purchase(checkoutData)
        if ('data' in result) {
          setOrderId(result.data.id)
          setOrderComplete(true)
        }
      } catch (error) {
        console.error(error)
      }
    } else {
      if (e.currentTarget instanceof HTMLFormElement) {
        const formData = new FormData(e.currentTarget)
        setCheckoutData({
          ...checkoutData,
          ...Object.fromEntries(formData)
        })
      }
      changeStep(currentStep + 1, e)
    }
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart}></Overlay>
      <BarraLateral>
        {isOrderComplete ? (
          <>
            <h2>Pedido realizado - {data.orderId} </h2>
            <TextosFinais>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
              <br />
              <br />
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
              <br />
              <br />
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
              <br />
              <br />
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </TextosFinais>
            <CartBotao type="submit">Concluir</CartBotao>
          </>
        ) : (
          <form onSubmit={handleCheckout}>
            {currentComponent}
            {isFirstStep && (
              <CartBotao type="submit">Continuar com a entrega</CartBotao>
            )}
            {isSecondStep && (
              <>
                <CartBotao
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    marginTop: '16px'
                  }}
                  type="submit"
                >
                  Continuar com o pagamento
                </CartBotao>
                <CartBotao
                  type="button"
                  onClick={(e) => changeStep(currentStep - 1, e)}
                >
                  Voltar para o carrinho
                </CartBotao>
              </>
            )}
            {isLastStep && (
              <>
                <CartBotao
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    marginTop: '16px'
                  }}
                  type="submit"
                >
                  Finalizar pagamento
                </CartBotao>

                <CartBotao
                  type="button"
                  onClick={(e) => changeStep(currentStep - 1, e)}
                >
                  Voltar para a edição de endereço
                </CartBotao>
              </>
            )}
          </form>
        )}
      </BarraLateral>
    </CartContainer>
  )
}

export default Checkout
