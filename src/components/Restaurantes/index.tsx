import { Link } from 'react-router-dom'

import estrela from '../../assets/images/estrela.png'
import { Botao, Container, Infos, List, Tag1, Tag2, TituloNota } from './styles'

export type Props = {
  restaurante?: Restaurante[]
  isLoading: boolean
}

const Restaurantes = ({ restaurante, isLoading }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 250) {
      return descricao.slice(0, 246) + '...'
    }
    return descricao
  }

  if (isLoading) {
    return <h4>Carregando...</h4>
  }

  return (
    <Container>
      <List>
        {restaurante &&
          restaurante.map((resta) => (
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
                  <Link
                    title={`Clique aqui para ver mais detalhes do restaurante: ${resta.titulo}`}
                    to={`/restaurantes/${resta.id}`}
                  >
                    Saiba mais
                  </Link>
                </Botao>
              </Infos>
            </div>
          ))}
      </List>
    </Container>
  )
}

export default Restaurantes
