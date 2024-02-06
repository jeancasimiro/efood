import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import * as Yup from 'yup'

import Botao from '../Botao/index'
import BarraCheckout from '../BarraCheckout'
import InputMask from 'react-input-mask'

import { RootReducer } from '../../store'
import { clear } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'

import { CampoDuplo, InputGroup, TextosFinais } from './styles'
import { CartBotao } from '../Cart/styles'

import { precoTotal } from '../Cart'

const Checkout = ({
  onClose
}: {
  cartItems: any
  totalPrice: any
  onClose: () => void
}) => {
  const dispatch = useDispatch()

  const [isPaymentVisible, setPaymentVisible] = useState(false)

  const { items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data, isSuccess }] = usePurchaseMutation()

  const handleContinueClick = () => {
    setPaymentVisible(true)
  }

  const handleBackClick = () => {
    setPaymentVisible(false)
  }

  const form = useFormik({
    initialValues: {
      nomeRecebedor: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',
      nomeCartao: '',
      numCartao: '',
      cvv: '',
      mes: '',
      ano: ''
    },
    validationSchema: Yup.object({
      nomeRecebedor: Yup.string()
        .min(5, 'O campo precisa ter no mínimo 5 caracteres')
        .required('O campo é obrigatório'),
      endereco: Yup.string()
        .min(5, 'O campo precisa ter no mínimo 5 caracteres')
        .required('O campo é obrigatório'),
      cidade: Yup.string()
        .min(3, 'O campo precisa ter no mínimo 3 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(7, 'Numeração inválida')
        .max(9, 'Numeração inválida')
        .required('O campo é obrigatório'),
      numero: Yup.string()
        .min(2, 'O campo precisa ter no mínimo 2 caracteres')
        .required('O campo é obrigatório'),
      complemento: Yup.string(),
      nomeCartao: Yup.string()
        .min(5, 'O campo precisa ter no mínimo 5 caracteres')
        .required('O campo é obrigatório'),
      numCartao: Yup.string()
        .min(13, 'O campo precisa ter no mínimo 13 caracteres')
        .max(19, 'O campo precisa ter no máximo 16 caracteres')
        .required('O campo é obrigatório'),
      cvv: Yup.string()
        .min(3, 'O campo precisa ter no mínimo 3 caracteres')
        .max(3, 'O campo precisa ter no máximo 3 caracteres')
        .required('O campo é obrigatório'),
      mes: Yup.string()
        .min(2, 'O campo precisa ter no mínimo 2 caracteres')
        .max(2, 'O campo precisa ter no máximo 2 caracteres')
        .required('O campo é obrigatório'),
      ano: Yup.string()
        .min(2, 'O campo precisa ter no mínimo 5 caracteres')
        .max(2, 'O campo precisa ter no máximo 4 caracteres')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.nomeRecebedor,
          adress: {
            description: values.endereco,
            city: values.cidade,
            zipCode: values.cep,
            number: Number(values.numero),
            complement: values.complemento
          }
        },
        payment: {
          card: {
            name: values.nomeCartao,
            number: values.numCartao,
            code: Number(values.cvv),
            expires: {
              month: Number(values.mes),
              year: Number(values.ano)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  if (items.length === 0 && !isSuccess) {
    return <Navigate to="/" />
  }

  return (
    <>
      {isSuccess && data ? (
        <BarraCheckout title={`Pedido realizado - ${data.orderId}`}>
          <>
            <TextosFinais style={{ marginBottom: '24px' }}>
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
            <CartBotao onClick={onClose} type="submit">
              Concluir
            </CartBotao>
          </>
        </BarraCheckout>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <BarraCheckout title="Entrega">
            <InputGroup>
              <label htmlFor="nomeRecebedor">Quem irá receber</label>
              <input
                type="text"
                id="nomeRecebedor"
                name="nomeRecebedor"
                value={form.values.nomeRecebedor}
                onChange={form.handleChange}
                className={checkInputHasError('nomeRecebedor') ? 'error' : ''}
              />
              <label htmlFor="endereco">Endereço</label>
              <input
                type="text"
                id="endereco"
                name="endereco"
                value={form.values.endereco}
                onChange={form.handleChange}
                className={checkInputHasError('endereco') ? 'error' : ''}
              />
              <label htmlFor="cidade">Cidade</label>
              <input
                type="text"
                id="cidade"
                name="cidade"
                value={form.values.cidade}
                onChange={form.handleChange}
                className={checkInputHasError('cidade') ? 'error' : ''}
              />
              <CampoDuplo>
                <InputGroup>
                  <label htmlFor="cep">CEP</label>
                  <InputMask
                    style={{ width: '155px' }}
                    type="text"
                    id="cep"
                    name="cep"
                    value={form.values.cep}
                    onChange={form.handleChange}
                    className={checkInputHasError('cep') ? 'error' : ''}
                    mask="99999-999"
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="numero">Número</label>
                  <input
                    style={{ width: '155px' }}
                    type="number"
                    id="numero"
                    name="numero"
                    value={form.values.numero}
                    onChange={form.handleChange}
                    className={checkInputHasError('numero') ? 'error' : ''}
                  />
                </InputGroup>
              </CampoDuplo>
              <InputGroup>
                <label htmlFor="complemento">Complemento (opcional)</label>
                <input
                  type="text"
                  id="complemento"
                  name="complemento"
                  value={form.values.complemento}
                  onChange={form.handleChange}
                  style={{ marginBottom: '24px' }}
                  className={checkInputHasError('complemento') ? 'error' : ''}
                />
              </InputGroup>
              <CartBotao type="button" onClick={handleContinueClick}>
                Continuar com o pagamento
              </CartBotao>
              <CartBotao onClick={onClose} type="button">
                Voltar para o carrinho
              </CartBotao>
            </InputGroup>
          </BarraCheckout>
          {isPaymentVisible && (
            <BarraCheckout
              title={`Pagamento - Valor a pagar R$ ${precoTotal(items)}`}
            >
              <InputGroup>
                <label htmlFor="nomeCartao">Nome no cartão</label>
                <input
                  type="text"
                  id="nomeCartao"
                  name="nomeCartao"
                  value={form.values.nomeCartao}
                  onChange={form.handleChange}
                  className={checkInputHasError('nomeCartao') ? 'error' : ''}
                />
                <CampoDuplo>
                  <div>
                    <label htmlFor="numCartao">Número do cartão</label>
                    <InputMask
                      style={{ width: '227px' }}
                      type="text"
                      id="numCartao"
                      name="numCartao"
                      value={form.values.numCartao}
                      onChange={form.handleChange}
                      className={checkInputHasError('numCartao') ? 'error' : ''}
                      mask={'9999 9999 9999 9999'}
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv">CVV</label>
                    <InputMask
                      style={{ width: '87px' }}
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={form.values.cvv}
                      onChange={form.handleChange}
                      className={checkInputHasError('cvv') ? 'error' : ''}
                      mask={'999'}
                    />
                  </div>
                </CampoDuplo>
                <CampoDuplo>
                  <div style={{ marginBottom: '16px' }}>
                    <label htmlFor="mes">Mês de vencimento</label>
                    <InputMask
                      style={{ width: '155px' }}
                      type="text"
                      id="mes"
                      name="mes"
                      value={form.values.mes}
                      onChange={form.handleChange}
                      className={checkInputHasError('mes') ? 'error' : ''}
                      mask={'99'}
                    />
                  </div>
                  <div>
                    <label htmlFor="ano">Ano de vencimento</label>
                    <InputMask
                      style={{ width: '155px' }}
                      type="text"
                      id="ano"
                      name="ano"
                      value={form.values.ano}
                      onChange={form.handleChange}
                      className={checkInputHasError('ano') ? 'error' : ''}
                      mask={'99'}
                    />
                  </div>
                </CampoDuplo>
                <Botao
                  type="submit"
                  onClick={form.handleSubmit}
                  title="Clique aqui para finalizar a compra"
                >
                  Finalizar pagamento
                </Botao>
                <CartBotao type="button" onClick={handleBackClick}>
                  Voltar para a edição de endereço
                </CartBotao>
              </InputGroup>
            </BarraCheckout>
          )}
        </form>
      )}
    </>
  )
}

export default Checkout
