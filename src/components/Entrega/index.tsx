import { CampoDuplo, Entrada, Rotulo } from './styles'

import { useForm } from '../../hooks/useForm'

const Entrega = () => {
  return (
    <>
      <h2>Entrega</h2>
      <Rotulo htmlFor="nomeRecebedor">Quem irá receber</Rotulo>
      <Entrada
        type="text"
        id="nomeRecebedor"
        name="delivery.receiver"
        required
      />
      <Rotulo htmlFor="endereço">Endereço</Rotulo>
      <Entrada
        type="text"
        id="endereço"
        name="delivery.adress.description"
        required
      />
      <Rotulo htmlFor="cidade">Cidade</Rotulo>
      <Entrada type="text" id="cidade" name="delivery.adress.city" required />
      <CampoDuplo>
        <div>
          <Rotulo htmlFor="cep">CEP</Rotulo>
          <Entrada
            style={{ width: '155px' }}
            type="number"
            id="cep"
            name="delivery.adress.zipCode"
            required
          />
        </div>
        <div>
          <Rotulo htmlFor="numero">Número</Rotulo>
          <Entrada
            style={{ width: '155px' }}
            type="number"
            id="numero"
            name="delivery.adress.number"
            required
          />
        </div>
      </CampoDuplo>
      <Rotulo htmlFor="complemento">Complemento (opcional)</Rotulo>
      <Entrada type="text" id="complemento" name="delivery.adress.complement" />
    </>
  )
}

export default Entrega
