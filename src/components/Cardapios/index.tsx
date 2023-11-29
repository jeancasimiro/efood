import fechar from '../../assets/images/close1.png'

import {
  Culinaria,
  Overlay,
  Restaurantee,
  Back,
  Botao,
  Botao2,
  Comida,
  Container,
  Imagem,
  Imagem2,
  Ingredientes,
  List,
  Infos,
  Modal,
  ModalContent
} from './styles'
import { useEffect, useState } from 'react'

import { ItemCardapio, Restaurante } from '../../pages/Home'
import { useParams } from 'react-router-dom'
import { url } from 'inspector'

const Cardapios = () => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 170) {
      return descricao.slice(0, 164) + '...'
    }
    return descricao
  }

  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const [itemSelecionado, setItemSelecionado] = useState<ItemCardapio | null>(
    null
  )

  const { id } = useParams()

  const [car, setCar] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setCar(res))
  }, [id])

  if (!car) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Back style={{ backgroundImage: `url(${car.capa})` }}>
        <Overlay>
          <Container>
            <Culinaria>{car.tipo}</Culinaria>
            <Restaurantee>{car.titulo}</Restaurantee>
          </Container>
        </Overlay>
      </Back>

      <Container>
        <List>
          {car.cardapio.map((card: ItemCardapio) => (
            <div key={card.id}>
              <Infos>
                <Imagem src={card.foto} />
                <Comida>{card.nome}</Comida>
                <Ingredientes>{getDescricao(card.descricao)}</Ingredientes>
                <Botao
                  onClick={() => {
                    setModalEstaAberto(true)
                    setItemSelecionado(card)
                  }}
                >
                  Adicionar ao carrinho
                </Botao>
              </Infos>
            </div>
          ))}
        </List>
      </Container>
      <Modal className={modalEstaAberto ? 'visivel' : ''}>
        <div className="container">
          <ModalContent>
            <div className="foto">
              <Imagem2 src={itemSelecionado ? itemSelecionado.foto : ''} />
            </div>
            <div className="desc">
              <h3>{itemSelecionado ? itemSelecionado.nome : ''}</h3>
              <p>
                {itemSelecionado ? itemSelecionado.descricao : ''}
                <br />
                <br />
                Serve: {itemSelecionado ? itemSelecionado.porcao : ''}
              </p>
              <Botao2 className="botaozin">
                Adicionar ao carrinho - R${' '}
                {itemSelecionado ? itemSelecionado.preco : ''}0
              </Botao2>
            </div>
            <div className="fechar">
              <img
                src={fechar}
                alt="Fechar"
                onClick={() => {
                  setModalEstaAberto(false)
                  setItemSelecionado(null)
                }}
              />
            </div>
          </ModalContent>
        </div>
        <div
          onClick={() => {
            setModalEstaAberto(false)
            setItemSelecionado(null)
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default Cardapios
