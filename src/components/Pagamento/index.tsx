import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { CampoDuplo, Entrada, Rotulo } from './styles'

const Pagamento = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  const precoTotal = () => {
    const total = items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
    return total.toFixed(2)
  }

  return (
    <>
      <h2>Pagamento - Valor a pagar R$ {precoTotal()}</h2>

      <Rotulo htmlFor="nomeCartao">Nome no cartão</Rotulo>
      <Entrada type="text" id="nomeCartao" name="payment.card.name" required />
      <CampoDuplo>
        <div>
          <Rotulo htmlFor="numCartao">Número do cartão</Rotulo>
          <Entrada
            style={{ width: '227px' }}
            type="number"
            id="numCartao"
            name="payment.card.number"
            required
          />
        </div>
        <div>
          <Rotulo htmlFor="cvv">CVV</Rotulo>
          <Entrada
            style={{ width: '87px' }}
            type="number"
            id="cvv"
            name="payment.card.code"
            required
          />
        </div>
      </CampoDuplo>
      <CampoDuplo>
        <div>
          <Rotulo htmlFor="mes">Mês de vencimento</Rotulo>
          <Entrada
            style={{ width: '155px' }}
            type="text"
            id="mes"
            name="payment.card.expires.month"
            required
          />
        </div>
        <div>
          <Rotulo htmlFor="ano">Ano de vencimento</Rotulo>
          <Entrada
            style={{ width: '155px' }}
            type="text"
            id="ano"
            name="payment.card.expires.year"
            required
          />
        </div>
      </CampoDuplo>
    </>
  )
}

export default Pagamento
