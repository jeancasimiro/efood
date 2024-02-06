import Header from '../../components/Header'
import Restaurantes from '../../components/Restaurantes'

import { useGetRestaurantQuery } from '../../services/api'

export type ItemCardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Home = () => {
  const { data: rest, isLoading } = useGetRestaurantQuery()

  return (
    <>
      <Header />
      <Restaurantes restaurante={rest} isLoading={isLoading} />
    </>
  )
}

export default Home
