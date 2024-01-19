import styled from 'styled-components'
import { cores } from '../../styles'
import lixeira from '../../assets/images/lixeira.png'

export const ContainerValor = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;
`

export const ItemCart = styled.li`
  display: flex;
  background-color: ${cores.begeEscuro};
  padding: 8px 8px 8px;
  margin-bottom: 16px;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    margin-bottom: 4px;
    margin-right: 8px;
    object-fit: cover;
  }

  h3 {
    font-weight: 900;
    font-size: 18px;
    margin-bottom: 16px;
  }

  h4 {
    font-weight: 400;
    font-size: 14px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`

export const TextoValor = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 16.41px;
`
export const Valor = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 16.41px;
`
