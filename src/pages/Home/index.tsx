import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Restaurantes from '../../components/Restaurantes'

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
  const [rest, setRest] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRest(res))
  }, [])

  return (
    <>
      <Header />
      <Restaurantes restaurante={rest} />
    </>
  )
}

export default Home
