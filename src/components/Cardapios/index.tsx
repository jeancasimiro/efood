import marguerita from '../../assets/images/image3.png'
import marguerita2 from '../../assets/images/marguerita.png'
import fechar from '../../assets/images/close1.png'

import italianaFundo from '../../assets/images/image2.png'

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
  Ingredientes,
  List,
  Infos,
  Modal,
  ModalContent
} from './styles'
import { useEffect, useState } from 'react'

import { Restaurante } from '../../pages/Home'
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
  const [itemId, setItemId] = useState(Number)

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
          {car.cardapio.map((card) => (
            <div key={card.id}>
              <Infos>
                <Imagem src={card.foto} />
                <Comida>{card.nome}</Comida>
                <Ingredientes>{getDescricao(card.descricao)}</Ingredientes>
                <Botao
                  onClick={() => {
                    setModalEstaAberto(true)
                    setItemId(card.id)
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
              <img src={marguerita2} />
            </div>
            <div className="desc">
              <h3>Pizza Marguerita</h3>
              <p>
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. Ela é
                feita com uma base de massa fina e crocante, coberta com molho
                de tomate fresco, queijo mussarela de alta qualidade, manjericão
                fresco e azeite de oliva extra-virgem. A combinação de sabores é
                perfeita, com o molho de tomate suculento e ligeiramente ácido,
                o queijo derretido e cremoso e as folhas de manjericão frescas,
                que adicionam um toque de sabor herbáceo. É uma pizza simples,
                mas deliciosa, que agrada a todos os paladares e é uma ótima
                opção para qualquer ocasião.
                <br />
                <br />
                Serve: de 2 a 3 pessoas
              </p>
              <Botao2 className="botaozin">
                Adicionar ao carrinho - R$ 60,90
              </Botao2>
            </div>
            <div className="fechar">
              <img
                src={fechar}
                alt="Fechar"
                onClick={() => setModalEstaAberto(false)}
              />
            </div>
          </ModalContent>
        </div>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Cardapios
