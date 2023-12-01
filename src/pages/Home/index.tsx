import Header from '../../components/Header'
import Restaurantes from '../../components/Restaurantes'

import { useGetRestaurantQuery } from '../../services/api'

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: ItemCardapio[]
}

export type ItemCardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Home = () => {
  const { data: rest } = useGetRestaurantQuery()

  if (rest) {
    return (
      <>
        <Header />
        <Restaurantes restaurante={rest} />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
