import { CartBotao } from '../Cart/styles'

export type Props = {
  type: 'button' | 'submit'
  title: string
  onClick?: () => void
  children: string
}

const Botao = ({ type, title, onClick, children }: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <CartBotao type={type} title={title} onClick={onClick}>
        {children}
      </CartBotao>
    )
  } else {
    return null
  }
}

export default Botao
