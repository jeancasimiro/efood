import { Link } from 'react-router-dom'

import italiana from '../../assets/images/image1.png'
import estrela from '../../assets/images/estrela.png'
import japonesa from '../../assets/images/imagem.png'

import { List, Container, TituloNota, Infos, Botao, Tag1, Tag2 } from './styles'

const Restaurante = () => (
  <Container>
    <List>
      <Infos>
        <img src={japonesa} alt="" />
        <Tag1>Japonesa</Tag1>
        <Tag2>Destaque da semana</Tag2>
        <TituloNota>
          <h3>Hioki Sushi</h3>
          <div>
            <h3>4.9</h3>
            <img src={estrela} alt="" />
          </div>
        </TituloNota>
        <p>
          Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
          frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
          rápida, embalagens cuidadosas e qualidade garantida. Experimente o
          Japão sem sair do lar com nosso delivery!
        </p>
        <Botao>
          <Link to="/hioki">Saiba mais</Link>
        </Botao>
      </Infos>
      <Infos>
        <img src={italiana} alt="" />
        <Tag1>Italiana</Tag1>
        <TituloNota>
          <h3>La Dolce Vita Trattoria</h3>
          <div>
            <h3>4.6</h3>
            <img src={estrela} alt="" />
          </div>
        </TituloNota>
        <p>
          A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
          Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
          tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e
          sabor inesquecível. Peça já!
        </p>
        <Botao>
          <Link to="/trattoria">Saiba mais</Link>
        </Botao>
      </Infos>
      <Infos>
        <img src={italiana} alt="" />
        <Tag1>Italiana</Tag1>
        <TituloNota>
          <h3>La Dolce Vita Trattoria</h3>
          <div>
            <h3>4.6</h3>
            <img src={estrela} alt="" />
          </div>
        </TituloNota>
        <p>
          A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
          Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
          tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e
          sabor inesquecível. Peça já!
        </p>
        <Botao>
          <Link to="/trattoria">Saiba mais</Link>
        </Botao>
      </Infos>
      <Infos>
        <img src={italiana} alt="" />
        <Tag1>Italiana</Tag1>
        <TituloNota>
          <h3>La Dolce Vita Trattoria</h3>
          <div>
            <h3>4.6</h3>
            <img src={estrela} alt="" />
          </div>
        </TituloNota>
        <p>
          A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
          Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
          tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e
          sabor inesquecível. Peça já!
        </p>
        <Botao>
          <Link to="/trattoria">Saiba mais</Link>
        </Botao>
      </Infos>
      <Infos>
        <img src={italiana} alt="" />
        <Tag1>Italiana</Tag1>
        <TituloNota>
          <h3>La Dolce Vita Trattoria</h3>
          <div>
            <h3>4.6</h3>
            <img src={estrela} alt="" />
          </div>
        </TituloNota>
        <p>
          A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
          Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
          tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e
          sabor inesquecível. Peça já!
        </p>
        <Botao>
          <Link to="/trattoria" style={{ textDecoration: 'none' }}>
            Saiba mais
          </Link>
        </Botao>
      </Infos>
      <Infos>
        <img src={italiana} alt="" />
        <Tag1>Italiana</Tag1>
        <TituloNota>
          <h3>La Dolce Vita Trattoria</h3>
          <div>
            <h3>4.6</h3>
            <img src={estrela} alt="" />
          </div>
        </TituloNota>
        <p>
          A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
          Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
          tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e
          sabor inesquecível. Peça já!
        </p>
        <Botao>
          <Link to="/trattoria">Saiba mais</Link>
        </Botao>
      </Infos>
    </List>
  </Container>
)

export default Restaurante
