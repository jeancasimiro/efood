import { BarraLateral, CartContainer } from '../Cart/styles'

type Props = {
  children: JSX.Element
  title: string
}

const BarraCheckout = ({ children, title }: Props) => (
  <CartContainer className={'is-open'}>
    <BarraLateral>
      <h2>{title}</h2>
      {children}
    </BarraLateral>
  </CartContainer>
)

export default BarraCheckout
