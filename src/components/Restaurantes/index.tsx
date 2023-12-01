import { Link } from 'react-router-dom'

import estrela from '../../assets/images/estrela.png'
import { List, Container, TituloNota, Infos, Botao, Tag1, Tag2 } from './styles'
import { Restaurante } from '../../pages/Home'

export type Props = {
  restaurante: Restaurante[]
}

const Restaurantes = ({ restaurante }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 250) {
      return descricao.slice(0, 246) + '...'
    }
    return descricao
  }

  const getDestaque = (destaque: Restaurante) => {
    const tags = []

    if (destaque.destacado) {
      tags.push(destaque.destacado)
    }
  }

  return (
    <Container>
      <List>
        {restaurante.map((resta) => (
          <div key={resta.id}>
            <Infos>
              <img className="capa" src={resta.capa} />
              <Tag1>{resta.tipo}</Tag1>
              {resta.destacado && <Tag2>Destaque da semana</Tag2>}
              <TituloNota>
                <h3>{resta.titulo}</h3>
                <div>
                  <h3>{resta.avaliacao}</h3>
                  <img src={estrela} />
                </div>
              </TituloNota>
              <p>{getDescricao(resta.descricao)}</p>
              <Botao>
                <Link to={`/restaurantes/${resta.id}`}>Saiba mais</Link>
              </Botao>
            </Infos>
          </div>
        ))}
      </List>
    </Container>
  )
}

export default Restaurantes
