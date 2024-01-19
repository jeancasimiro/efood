import { useDispatch, useSelector } from 'react-redux'
import { ItemCardapio } from '../../pages/Home'
import { RootReducer } from '../../store'
import { remove } from '../../store/reducers/cart'
import { ContainerValor, ItemCart, TextoValor, Valor } from './styles'

const Cart = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

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
        <Valor>R$ {precoTotal()}</Valor>
      </ContainerValor>
    </>
  )
}
export default Cart
