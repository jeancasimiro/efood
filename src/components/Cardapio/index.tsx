import marguerita from '../../assets/images/image3.png'
import marguerita2 from '../../assets/images/marguerita.png'
import fechar from '../../assets/images/close1.png'

import {
  Botao,
  Comida,
  Container,
  Imagem,
  Ingredientes,
  List,
  Infos,
  Modal,
  ModalContent
} from './styles'
import { useState } from 'react'

const Cardapio = () => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  return (
    <>
      <Container>
        <List>
          <Infos>
            <Imagem src={marguerita} alt="Pizza Marguerita" />
            <Comida>Pizza marguerita</Comida>
            <Ingredientes>
              A clássica Marguerita: molho de tomate suculento, mussarela
              derretida, manjericão fresco e um toque de azeite. Sabor e
              simplicidade!
            </Ingredientes>
            <Botao onClick={() => setModalEstaAberto(true)}>
              Adicionar ao carrinho
            </Botao>
          </Infos>
          <Infos>
            <Imagem src={marguerita} alt="Pizza Marguerita" />
            <Comida>Pizza marguerita</Comida>
            <Ingredientes>
              A clássica Marguerita: molho de tomate suculento, mussarela
              derretida, manjericão fresco e um toque de azeite. Sabor e
              simplicidade!
            </Ingredientes>
            <Botao>Adicionar ao carrinho</Botao>
          </Infos>
          <Infos>
            <Imagem src={marguerita} alt="Pizza Marguerita" />
            <Comida>Pizza marguerita</Comida>
            <Ingredientes>
              A clássica Marguerita: molho de tomate suculento, mussarela
              derretida, manjericão fresco e um toque de azeite. Sabor e
              simplicidade!
            </Ingredientes>
            <Botao>Adicionar ao carrinho</Botao>
          </Infos>
          <Infos>
            <Imagem src={marguerita} alt="Pizza Marguerita" />
            <Comida>Pizza marguerita</Comida>
            <Ingredientes>
              A clássica Marguerita: molho de tomate suculento, mussarela
              derretida, manjericão fresco e um toque de azeite. Sabor e
              simplicidade!
            </Ingredientes>
            <Botao>Adicionar ao carrinho</Botao>
          </Infos>
          <Infos>
            <Imagem src={marguerita} alt="Pizza Marguerita" />
            <Comida>Pizza marguerita</Comida>
            <Ingredientes>
              A clássica Marguerita: molho de tomate suculento, mussarela
              derretida, manjericão fresco e um toque de azeite. Sabor e
              simplicidade!
            </Ingredientes>
            <Botao>Adicionar ao carrinho</Botao>
          </Infos>
          <Infos>
            <Imagem src={marguerita} alt="Pizza Marguerita" />
            <Comida>Pizza marguerita</Comida>
            <Ingredientes>
              A clássica Marguerita: molho de tomate suculento, mussarela
              derretida, manjericão fresco e um toque de azeite. Sabor e
              simplicidade!
            </Ingredientes>
            <Botao>Adicionar ao carrinho</Botao>
          </Infos>
        </List>
      </Container>

      <Modal className={modalEstaAberto ? 'visivel' : ''}>
        <div className="container">
          <ModalContent>
            <div className="foto">
              <img src={marguerita2} alt="Pizza marguerita" />
            </div>
            <div className="desc">
              <h3>Pizza marguerita</h3>
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
              <Botao className="botaozin">
                Adicionar ao carrinho - R$ 60,90
              </Botao>
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

export default Cardapio
