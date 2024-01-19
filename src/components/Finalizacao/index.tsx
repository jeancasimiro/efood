import { CartBotao, TextosFinais } from '../Checkout/styles'

const Finalizacao = () => {
  return (
    <>
      <h2>Pedido realizado - </h2>
      <TextosFinais>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
        <br />
        <br />
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.
        <br />
        <br />
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        <br />
        <br />
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </TextosFinais>
      <CartBotao type="submit">Concluir</CartBotao>
    </>
  )
}

export default Finalizacao
